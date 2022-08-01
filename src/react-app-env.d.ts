/// <reference types="react-scripts" />

import { ethers } from 'ethers';

declare global {
  interface Window {
    ethers: ethers.providers.Web3Provider;
  }
}
