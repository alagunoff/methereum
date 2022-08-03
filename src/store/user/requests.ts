import { createAsyncThunk } from '@reduxjs/toolkit';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

import { RINKEBY_CHAIN_ID } from 'shared/constants';

import { IUser } from './types';

const initUser = createAsyncThunk<IUser>('user/initUser', async () => {
  const user: IUser = {};
  const provider: any = await detectEthereumProvider();

  if (provider) {
    provider.on('chainChanged', () => window.location.reload());
    provider.on('accountsChanged', () => window.location.reload());

    window.ethersProvider = new ethers.providers.Web3Provider(provider);

    const [currentWallet] = await window.ethersProvider.listAccounts();

    if (provider.isMetaMask) {
      user.providers = {
        metaMask: {
          connected: !!currentWallet,
        },
      };
    }

    const network = await window.ethersProvider.getNetwork();
    user.network = {
      isRinkeby: network.chainId === RINKEBY_CHAIN_ID,
    };

    if (currentWallet) {
      user.wallet = {
        full: currentWallet,
        short: `${currentWallet.substring(0, 6)}...${currentWallet.substring(
          currentWallet.length - 2,
        )}`,
      };

      const balance = await window.ethersProvider.getBalance(currentWallet);
      user.balance = Number(ethers.utils.formatEther(balance));
    }
  }

  return user;
});

const logIn = createAsyncThunk<string, ethers.providers.Web3Provider>(
  'user/logIn',
  async (provider) => {
    const [currentWallet] = await provider.send('eth_requestAccounts', []);

    return currentWallet;
  },
);

export { initUser, logIn };
