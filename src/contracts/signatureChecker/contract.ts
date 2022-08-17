const contract = {
  address: '0x92bDE003Ec04a593C57812Cc96070E0952823125',
  interface: [
    {
      inputs: [],
      name: 'CAT',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: '_signature', type: 'bytes' },
        { internalType: 'address', name: '_sender', type: 'address' },
      ],
      name: 'isValidSignature',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  generalMethods: {
    read: {
      getHashedCat: 'CAT',
    },
  },
};

export default contract;
