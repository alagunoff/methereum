import { ethers } from 'ethers';

const PROVIDER = window.ethereum;
const ETHERS_PROVIDER = new ethers.providers.Web3Provider(PROVIDER);

const RINKEBY_CHAIN_ID = 4;

const METALAMP_SITE_LINK = 'https://www.metalamp.io/';

export { PROVIDER, ETHERS_PROVIDER, RINKEBY_CHAIN_ID, METALAMP_SITE_LINK };
