import { createAsyncThunk } from '@reduxjs/toolkit';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

const fetchNetwork = createAsyncThunk('user/fetchNetwork', async () => {
  const etheriumProvider = await detectEthereumProvider();
  const ethersProvider = new ethers.providers.Web3Provider(
    etheriumProvider as any,
  );
  const chain = await ethersProvider.getNetwork();

  return chain;
});

const fetchWallet = createAsyncThunk('user/fetchWallet', async () => {
  const etheriumProvider = await detectEthereumProvider();
  const ethersProvider = new ethers.providers.Web3Provider(
    etheriumProvider as any,
  );
  const [wallet] = await ethersProvider.listAccounts();

  return wallet;
});

export { fetchNetwork, fetchWallet };
