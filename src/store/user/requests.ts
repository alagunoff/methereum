import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

import { RINKEBY_CHAIN_ID } from 'shared/constants';

import { IUser } from './types';

const initUser = createAsyncThunk<IUser, ethers.providers.Web3Provider>(
  'user/initUser',
  async (provider) => {
    const network = await provider.getNetwork();
    const user: IUser = {
      network: {
        isRinkeby: network.chainId === RINKEBY_CHAIN_ID,
      },
    };
    const [wallet] = await provider.listAccounts();

    if (wallet) {
      const balance = await provider.getBalance(wallet);

      user.wallet = {
        full: wallet,
        short: `${wallet.substring(0, 6)}...${wallet.substring(
          wallet.length - 2,
        )}`,
      };
      user.balance = Number(ethers.utils.formatEther(balance));
    }

    return user;
  },
);

const logIn = createAsyncThunk<string, ethers.providers.Web3Provider>(
  'user/logIn',
  async (provider) => {
    const [wallet] = await provider.send('eth_requestAccounts', []);

    return wallet;
  },
);

export { initUser, logIn };
