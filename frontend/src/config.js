export const address = '0x809d550fca64d94Bd9F66E60752A544199cfAC3D';

export const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'addTama',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'meal',
        type: 'string',
      },
    ],
    name: 'feedMyCreature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMyCreatureFoodLvl',
    outputs: [
      {
        internalType: 'uint16',
        name: 'foodLvl',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMyCreatureHappinessLvl',
    outputs: [
      {
        internalType: 'uint16',
        name: 'happinessLvl',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMyCreatureName',
    outputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'meals',
    outputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'uint16',
        name: 'points',
        type: 'uint16',
      },
      {
        internalType: 'bool',
        name: 'exists',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'playtime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
