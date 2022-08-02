/// <reference types="react-scripts" />

import { ethers } from 'ethers';

declare global {
  interface Window {
    ethersProvider?: ethers.providers.Web3Provider;
  }
}
