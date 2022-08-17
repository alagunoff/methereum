import { goerli } from 'wagmi/chains';

const tokens = [
  {
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    chainId: goerli.id,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6/logo.png',
  },
];

export { tokens };
