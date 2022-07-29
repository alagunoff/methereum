import { ethers } from 'ethers';

const METAMASK_PROVIDER = window.ethereum;
const ETHERS_PROVIDER = new ethers.providers.Web3Provider(window.ethereum);

const RINKEBY_CHAIN_ID = 4;

const METALAMP_SITE_LINK = 'https://www.metalamp.io/';
const METALAMP_LOGO_LINK =
  'https://hsto.org/getpro/moikrug/uploads/company/100/005/597/9/logo/medium_4a301072dec6b6a49050e5b294cd7983.png';

export {
  METAMASK_PROVIDER,
  ETHERS_PROVIDER,
  RINKEBY_CHAIN_ID,
  METALAMP_SITE_LINK,
  METALAMP_LOGO_LINK,
};
