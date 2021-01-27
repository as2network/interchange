/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ProxyFactory } from "./ProxyFactory";

export class ProxyFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ProxyFactory> {
    return super.deploy(overrides) as Promise<ProxyFactory>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ProxyFactory {
    return super.attach(address) as ProxyFactory;
  }
  connect(signer: Signer): ProxyFactoryFactory {
    return super.connect(signer) as ProxyFactoryFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as ProxyFactory;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_mastercopy",
        type: "address",
      },
      {
        name: "initializer",
        type: "bytes",
      },
      {
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "createProxyWithNonce",
    outputs: [
      {
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_mastercopy",
        type: "address",
      },
      {
        name: "initializer",
        type: "bytes",
      },
      {
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "calculateCreateProxyWithNonceAddress",
    outputs: [
      {
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyCreationCode",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "masterCopy",
        type: "address",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "createProxy",
    outputs: [
      {
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyRuntimeCode",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_mastercopy",
        type: "address",
      },
      {
        name: "initializer",
        type: "bytes",
      },
      {
        name: "saltNonce",
        type: "uint256",
      },
      {
        name: "callback",
        type: "address",
      },
    ],
    name: "createProxyWithCallback",
    outputs: [
      {
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "proxy",
        type: "address",
      },
    ],
    name: "ProxyCreation",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b2f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631688f0b9146100675780632500510e1461013b57806353e5d935146101bb57806361b69abd14610238578063addacc0f146102ee578063d18af54d146102f6575b600080fd5b61011f6004803603606081101561007d57600080fd5b600160a060020a0382351691908101906040810160208201356401000000008111156100a857600080fd5b8201836020820111156100ba57600080fd5b803590602001918460018302840111640100000000831117156100dc57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506103ba915050565b60408051600160a060020a039092168252519081900360200190f35b61011f6004803603606081101561015157600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561017c57600080fd5b82018360208201111561018e57600080fd5b803590602001918460018302840111640100000000831117156101b057600080fd5b919350915035610431565b6101c361053c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101fd5781810151838201526020016101e5565b50505050905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61011f6004803603604081101561024e57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561027957600080fd5b82018360208201111561028b57600080fd5b803590602001918460018302840111640100000000831117156102ad57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061055f945050505050565b6101c3610605565b61011f6004803603608081101561030c57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561033757600080fd5b82018360208201111561034957600080fd5b8035906020019184600183028401116401000000008311171561036b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505082359350505060200135600160a060020a0316610617565b60006103c7848484610771565b90506000835111156103ee5760008060008551602087016000865af114156103ee57600080fd5b60408051600160a060020a038316815290517fa38789425dbeee0239e16ff2d2567e31720127fbc6430758c1a4efc6aef29f809181900360200190a19392505050565b60006104758585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250610771915050565b60408051600160a060020a03831660601b6020808301919091528251808303601401815260348301938490527f08c379a00000000000000000000000000000000000000000000000000000000090935260388201818152835160588401528351949550929383926078019185019080838360005b838110156105015781810151838201526020016104e9565b50505050905090810190601f16801561052e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60606040518060200161054e906108c6565b601f19828203018252604052905090565b60008260405161056e906108c6565b600160a060020a03909116815260405190819003602001906000f08015801561059b573d6000803e3d6000fd5b5090506000825111156105c35760008060008451602086016000865af114156105c357600080fd5b60408051600160a060020a038316815290517fa38789425dbeee0239e16ff2d2567e31720127fbc6430758c1a4efc6aef29f809181900360200190a192915050565b60606040518060200161054e906108d3565b604080516020808201859052600160a060020a03841660601b828401528251603481840301815260549092019092528051910120600090811c61065b8686836103ba565b9150600160a060020a03831615610768576040517f1e52b518000000000000000000000000000000000000000000000000000000008152600160a060020a038381166004830190815288821660248401526064830187905260806044840190815288516084850152885192871693631e52b5189387938c938c938c9360a490910190602086019080838360005b838110156107005781810151838201526020016106e8565b50505050905090810190601f16801561072d5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561074f57600080fd5b505af1158015610763573d6000803e3d6000fd5b505050505b50949350505050565b60008083805190602001208360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090506060604051806020016107be906108c6565b6020820181038252806040525086600160a060020a03166040516020018083805190602001908083835b602083106108075780518252601f1990920191602091820191016107e8565b51815160209384036101000a600019018019909216911617905292019384525060408051808503815293820190528251929450859350840190506000f59250600160a060020a03831615156108bd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f437265617465322063616c6c206661696c656400000000000000000000000000604482015290519081900360640190fd5b50509392505050565b610185806108e083390190565b609f80610a658339019056fe608060405234801561001057600080fd5b506040516020806101858339810180604052602081101561003057600080fd5b5051600160a060020a0381161515610093576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806101616024913960400191505060405180910390fd5b60008054600160a060020a03909216600160a060020a0319909216919091179055609f806100c26000396000f3fe608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e801515606e573d6000fd5b3d6000f3fea165627a7a7230582071e478cbe4e3b6ad8d63995a70684cc226e56494c7ecda32d393b7597a1e4b2a0029496e76616c6964206d617374657220636f707920616464726573732070726f7669646564608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e801515606e573d6000fd5b3d6000f3fea165627a7a7230582071e478cbe4e3b6ad8d63995a70684cc226e56494c7ecda32d393b7597a1e4b2a0029a165627a7a72305820e1cb7954fba6c39d6159e6550420b36726f01d66362f550511546850d6c09b960029";