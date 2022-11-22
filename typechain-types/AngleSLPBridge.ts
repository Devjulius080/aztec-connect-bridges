/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common.js";

export declare namespace AztecTypes {
  export type AztecAssetStruct = {
    id: PromiseOrValue<BigNumberish>;
    erc20Address: PromiseOrValue<string>;
    assetType: PromiseOrValue<BigNumberish>;
  };

  export type AztecAssetStructOutput = [BigNumber, string, number] & {
    id: BigNumber;
    erc20Address: string;
    assetType: number;
  };
}

export interface AngleSLPBridgeInterface extends utils.Interface {
  functions: {
    "DAI()": FunctionFragment;
    "FRAX()": FunctionFragment;
    "POOLMANAGER_DAI()": FunctionFragment;
    "POOLMANAGER_FRAX()": FunctionFragment;
    "POOLMANAGER_USDC()": FunctionFragment;
    "POOLMANAGER_WETH()": FunctionFragment;
    "ROLLUP_PROCESSOR()": FunctionFragment;
    "SANDAI()": FunctionFragment;
    "SANFRAX()": FunctionFragment;
    "SANUSDC()": FunctionFragment;
    "SANWETH()": FunctionFragment;
    "STABLE_MASTER()": FunctionFragment;
    "SUBSIDY()": FunctionFragment;
    "USDC()": FunctionFragment;
    "WETH()": FunctionFragment;
    "computeCriteria((uint256,address,uint8),(uint256,address,uint8),(uint256,address,uint8),(uint256,address,uint8),uint64)": FunctionFragment;
    "convert((uint256,address,uint8),(uint256,address,uint8),(uint256,address,uint8),(uint256,address,uint8),uint256,uint256,uint64,address)": FunctionFragment;
    "finalise((uint256,address,uint8),(uint256,address,uint8),(uint256,address,uint8),(uint256,address,uint8),uint256,uint64)": FunctionFragment;
    "getPoolManagerAndSanToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DAI"
      | "FRAX"
      | "POOLMANAGER_DAI"
      | "POOLMANAGER_FRAX"
      | "POOLMANAGER_USDC"
      | "POOLMANAGER_WETH"
      | "ROLLUP_PROCESSOR"
      | "SANDAI"
      | "SANFRAX"
      | "SANUSDC"
      | "SANWETH"
      | "STABLE_MASTER"
      | "SUBSIDY"
      | "USDC"
      | "WETH"
      | "computeCriteria"
      | "convert"
      | "finalise"
      | "getPoolManagerAndSanToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "FRAX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "POOLMANAGER_DAI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOLMANAGER_FRAX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOLMANAGER_USDC",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOLMANAGER_WETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROLLUP_PROCESSOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SANDAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "SANFRAX", values?: undefined): string;
  encodeFunctionData(functionFragment: "SANUSDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "SANWETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "STABLE_MASTER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SUBSIDY", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "computeCriteria",
    values: [
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "convert",
    values: [
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalise",
    values: [
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      AztecTypes.AztecAssetStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolManagerAndSanToken",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FRAX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "POOLMANAGER_DAI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POOLMANAGER_FRAX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POOLMANAGER_USDC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POOLMANAGER_WETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROLLUP_PROCESSOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SANDAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SANFRAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SANUSDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SANWETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "STABLE_MASTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SUBSIDY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeCriteria",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolManagerAndSanToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AngleSLPBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AngleSLPBridgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DAI(overrides?: CallOverrides): Promise<[string]>;

    FRAX(overrides?: CallOverrides): Promise<[string]>;

    POOLMANAGER_DAI(overrides?: CallOverrides): Promise<[string]>;

    POOLMANAGER_FRAX(overrides?: CallOverrides): Promise<[string]>;

    POOLMANAGER_USDC(overrides?: CallOverrides): Promise<[string]>;

    POOLMANAGER_WETH(overrides?: CallOverrides): Promise<[string]>;

    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<[string]>;

    SANDAI(overrides?: CallOverrides): Promise<[string]>;

    SANFRAX(overrides?: CallOverrides): Promise<[string]>;

    SANUSDC(overrides?: CallOverrides): Promise<[string]>;

    SANWETH(overrides?: CallOverrides): Promise<[string]>;

    STABLE_MASTER(overrides?: CallOverrides): Promise<[string]>;

    SUBSIDY(overrides?: CallOverrides): Promise<[string]>;

    USDC(overrides?: CallOverrides): Promise<[string]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    computeCriteria(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _auxData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    convert(
      _inputAssetA: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      _outputAssetA: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _totalInputValue: PromiseOrValue<BigNumberish>,
      _interactionNonce: PromiseOrValue<BigNumberish>,
      _auxData: PromiseOrValue<BigNumberish>,
      _rollupBeneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalise(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPoolManagerAndSanToken(
      _collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { poolManager: string; sanToken: string }>;
  };

  DAI(overrides?: CallOverrides): Promise<string>;

  FRAX(overrides?: CallOverrides): Promise<string>;

  POOLMANAGER_DAI(overrides?: CallOverrides): Promise<string>;

  POOLMANAGER_FRAX(overrides?: CallOverrides): Promise<string>;

  POOLMANAGER_USDC(overrides?: CallOverrides): Promise<string>;

  POOLMANAGER_WETH(overrides?: CallOverrides): Promise<string>;

  ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<string>;

  SANDAI(overrides?: CallOverrides): Promise<string>;

  SANFRAX(overrides?: CallOverrides): Promise<string>;

  SANUSDC(overrides?: CallOverrides): Promise<string>;

  SANWETH(overrides?: CallOverrides): Promise<string>;

  STABLE_MASTER(overrides?: CallOverrides): Promise<string>;

  SUBSIDY(overrides?: CallOverrides): Promise<string>;

  USDC(overrides?: CallOverrides): Promise<string>;

  WETH(overrides?: CallOverrides): Promise<string>;

  computeCriteria(
    arg0: AztecTypes.AztecAssetStruct,
    arg1: AztecTypes.AztecAssetStruct,
    arg2: AztecTypes.AztecAssetStruct,
    arg3: AztecTypes.AztecAssetStruct,
    _auxData: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convert(
    _inputAssetA: AztecTypes.AztecAssetStruct,
    arg1: AztecTypes.AztecAssetStruct,
    _outputAssetA: AztecTypes.AztecAssetStruct,
    arg3: AztecTypes.AztecAssetStruct,
    _totalInputValue: PromiseOrValue<BigNumberish>,
    _interactionNonce: PromiseOrValue<BigNumberish>,
    _auxData: PromiseOrValue<BigNumberish>,
    _rollupBeneficiary: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalise(
    arg0: AztecTypes.AztecAssetStruct,
    arg1: AztecTypes.AztecAssetStruct,
    arg2: AztecTypes.AztecAssetStruct,
    arg3: AztecTypes.AztecAssetStruct,
    arg4: PromiseOrValue<BigNumberish>,
    arg5: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPoolManagerAndSanToken(
    _collateral: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string] & { poolManager: string; sanToken: string }>;

  callStatic: {
    DAI(overrides?: CallOverrides): Promise<string>;

    FRAX(overrides?: CallOverrides): Promise<string>;

    POOLMANAGER_DAI(overrides?: CallOverrides): Promise<string>;

    POOLMANAGER_FRAX(overrides?: CallOverrides): Promise<string>;

    POOLMANAGER_USDC(overrides?: CallOverrides): Promise<string>;

    POOLMANAGER_WETH(overrides?: CallOverrides): Promise<string>;

    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<string>;

    SANDAI(overrides?: CallOverrides): Promise<string>;

    SANFRAX(overrides?: CallOverrides): Promise<string>;

    SANUSDC(overrides?: CallOverrides): Promise<string>;

    SANWETH(overrides?: CallOverrides): Promise<string>;

    STABLE_MASTER(overrides?: CallOverrides): Promise<string>;

    SUBSIDY(overrides?: CallOverrides): Promise<string>;

    USDC(overrides?: CallOverrides): Promise<string>;

    WETH(overrides?: CallOverrides): Promise<string>;

    computeCriteria(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _auxData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convert(
      _inputAssetA: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      _outputAssetA: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _totalInputValue: PromiseOrValue<BigNumberish>,
      _interactionNonce: PromiseOrValue<BigNumberish>,
      _auxData: PromiseOrValue<BigNumberish>,
      _rollupBeneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, boolean] & { outputValueA: BigNumber }>;

    finalise(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, boolean]>;

    getPoolManagerAndSanToken(
      _collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { poolManager: string; sanToken: string }>;
  };

  filters: {};

  estimateGas: {
    DAI(overrides?: CallOverrides): Promise<BigNumber>;

    FRAX(overrides?: CallOverrides): Promise<BigNumber>;

    POOLMANAGER_DAI(overrides?: CallOverrides): Promise<BigNumber>;

    POOLMANAGER_FRAX(overrides?: CallOverrides): Promise<BigNumber>;

    POOLMANAGER_USDC(overrides?: CallOverrides): Promise<BigNumber>;

    POOLMANAGER_WETH(overrides?: CallOverrides): Promise<BigNumber>;

    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<BigNumber>;

    SANDAI(overrides?: CallOverrides): Promise<BigNumber>;

    SANFRAX(overrides?: CallOverrides): Promise<BigNumber>;

    SANUSDC(overrides?: CallOverrides): Promise<BigNumber>;

    SANWETH(overrides?: CallOverrides): Promise<BigNumber>;

    STABLE_MASTER(overrides?: CallOverrides): Promise<BigNumber>;

    SUBSIDY(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    computeCriteria(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _auxData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convert(
      _inputAssetA: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      _outputAssetA: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _totalInputValue: PromiseOrValue<BigNumberish>,
      _interactionNonce: PromiseOrValue<BigNumberish>,
      _auxData: PromiseOrValue<BigNumberish>,
      _rollupBeneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalise(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPoolManagerAndSanToken(
      _collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FRAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOLMANAGER_DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOLMANAGER_FRAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOLMANAGER_USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOLMANAGER_WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SANDAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SANFRAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SANUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SANWETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STABLE_MASTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SUBSIDY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computeCriteria(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _auxData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convert(
      _inputAssetA: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      _outputAssetA: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      _totalInputValue: PromiseOrValue<BigNumberish>,
      _interactionNonce: PromiseOrValue<BigNumberish>,
      _auxData: PromiseOrValue<BigNumberish>,
      _rollupBeneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalise(
      arg0: AztecTypes.AztecAssetStruct,
      arg1: AztecTypes.AztecAssetStruct,
      arg2: AztecTypes.AztecAssetStruct,
      arg3: AztecTypes.AztecAssetStruct,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPoolManagerAndSanToken(
      _collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
