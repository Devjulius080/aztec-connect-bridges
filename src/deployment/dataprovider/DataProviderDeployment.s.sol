// SPDX-License-Identifier: Apache-2.0
// Copyright 2022 Aztec.
pragma solidity >=0.8.4;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {BaseDeployment} from "../base/BaseDeployment.s.sol";
import {DataProvider} from "../../aztec/DataProvider.sol";
import {IRollupProcessor} from "rollup-encoder/interfaces/IRollupProcessor.sol";

contract DataProviderDeployment is BaseDeployment {
    function deploy() public returns (address) {
        emit log("Deploying Data Provider");

        vm.broadcast();
        DataProvider provider = new DataProvider(ROLLUP_PROCESSOR);
        emit log_named_address("Data provider deployed to", address(provider));

        return address(provider);
    }

    function read() public {
        address provider = 0x8B2E54fa4398C8f7502f30aC94Cb1f354390c8ab;
        if (block.chainid == 3567) {
            provider = 0xD25B8B044CE58eaBF41288E223609726A6c98e44;
        } else if (block.chainid == 0xa57ec) {
            provider = 0xA33B20Ba45cA9C265bbF7b35a75717590EDfc868;
        }
        readProvider(provider);
    }

    function readProvider(address _provider) public {
        DataProvider provider = DataProvider(_provider);

        emit log_named_address("Data provider", _provider);

        IRollupProcessor rp = provider.ROLLUP_PROCESSOR();

        if (rp.allowThirdPartyContracts()) {
            emit log("Third parties can deploy bridges");
        } else {
            emit log("Third parties cannot deploy bridges");
        }

        emit log(" - Assets");
        DataProvider.AssetData[] memory assets = provider.getAssets();
        for (uint256 i = 0; i < assets.length; i++) {
            DataProvider.AssetData memory asset = assets[i];
            if (i == 0 || asset.assetId != 0) {
                uint256 gas = i > 0 ? rp.assetGasLimits(asset.assetId) : 30000;
                emit log_string(
                    string(
                        abi.encodePacked(
                            "AssetId ",
                            Strings.toString(asset.assetId),
                            ", address ",
                            Strings.toHexString(asset.assetAddress),
                            ", ",
                            asset.label,
                            " (",
                            Strings.toString(gas),
                            " gas)"
                        )
                    )
                    );
            }
        }
        emit log(" - Bridges");
        DataProvider.BridgeData[] memory bridges = provider.getBridges();
        for (uint256 i = 0; i < bridges.length; i++) {
            DataProvider.BridgeData memory bridge = bridges[i];
            if (bridge.bridgeAddressId != 0) {
                uint256 gas = rp.bridgeGasLimits(bridge.bridgeAddressId);
                emit log_string(
                    string(
                        abi.encodePacked(
                            "AddressId ",
                            Strings.toString(bridge.bridgeAddressId),
                            ", address ",
                            Strings.toHexString(bridge.bridgeAddress),
                            ", ",
                            bridge.label,
                            " (",
                            Strings.toString(gas),
                            " gas)"
                        )
                    )
                    );
            }
        }
    }

    function deployAndListMany() public returns (address) {
        address provider = deploy();
        updateNames(provider);
        return provider;
    }

    function updateNames(address _provider) public {
        DataProvider provider = DataProvider(_provider);
        IRollupProcessor rp = provider.ROLLUP_PROCESSOR();

        uint256 supportedAssetLength = rp.getSupportedAssetsLength() + 1;
        uint256[] memory assetIds = new uint256[](supportedAssetLength);
        string[] memory assetTags = new string[](supportedAssetLength);
        for (uint256 i = 0; i < supportedAssetLength; i++) {
            assetIds[i] = i;
            assetTags[i] = i == 0 ? "Eth" : IERC20Metadata(rp.getSupportedAsset(i)).symbol();
        }

        uint256[] memory bridgeAddressIds = new uint256[](13);
        string[] memory bridgeTags = new string[](13);

        bridgeAddressIds[0] = 1;
        bridgeAddressIds[1] = 5;
        bridgeAddressIds[2] = 6;
        bridgeAddressIds[3] = 7;
        bridgeAddressIds[4] = 8;
        bridgeAddressIds[5] = 9;
        bridgeAddressIds[6] = 10;
        bridgeAddressIds[7] = 11;
        bridgeAddressIds[8] = 12;
        bridgeAddressIds[9] = 13;
        bridgeAddressIds[10] = 14;
        bridgeAddressIds[11] = 15;
        bridgeAddressIds[12] = 16;

        bridgeTags[0] = "ElementBridge_800K";
        bridgeTags[1] = "CurveStEthBridge_250K";
        bridgeTags[2] = "YearnBridgeDeposit_200K";
        bridgeTags[3] = "YearnBridgeWithdraw_800K";
        bridgeTags[4] = "ElementBridge_2M";
        bridgeTags[5] = "ERC4626_300K";
        bridgeTags[6] = "DCA_400K";
        bridgeTags[7] = "ERC4626_500K";
        bridgeTags[8] = "ERC4626_400K";
        bridgeTags[9] = "Liquity275_550K";
        bridgeTags[10] = "Liquity400_550K";
        bridgeTags[11] = "Uniswap_500K";
        bridgeTags[12] = "Uniswap_800K";

        vm.broadcast();
        DataProvider(_provider).addAssetsAndBridges(assetIds, assetTags, bridgeAddressIds, bridgeTags);

        readProvider(_provider);
    }

    function _listBridge(address _provider, uint256 _bridgeAddressId, string memory _tag) internal {
        vm.broadcast();
        DataProvider(_provider).addBridge(_bridgeAddressId, _tag);
        emit log_named_uint(string(abi.encodePacked("[Bridge] Listed ", _tag, " at")), _bridgeAddressId);
    }

    function _listAsset(address _provider, uint256 _assetId, string memory _tag) internal {
        vm.broadcast();
        DataProvider(_provider).addAsset(_assetId, _tag);
        emit log_named_uint(string(abi.encodePacked("[Asset]  Listed ", _tag, " at")), _assetId);
    }
}
