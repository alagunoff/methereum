import { ethers } from 'ethers';

const METAMASK_PROVIDER = window.ethereum;
const ETHERS_PROVIDER = new ethers.providers.Web3Provider(window.ethereum);

const RINKEBY_CHAIN_ID = 4;

const METALAMP_SITE_LINK = 'https://www.metalamp.io/';

export {
  METAMASK_PROVIDER,
  ETHERS_PROVIDER,
  RINKEBY_CHAIN_ID,
  METALAMP_SITE_LINK,
};
