import { createAsyncThunk } from '@reduxjs/toolkit';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

const fetchNetwork = createAsyncThunk('user/fetchNetwork', async () => {
  const etheriumProvider = await detectEthereumProvider();
  const ethersProvider = new ethers.providers.Web3Provider(
    etheriumProvider as any,
  );
  const network = await ethersProvider.getNetwork();

  return network;
});

const fetchWallet = createAsyncThunk('user/fetchWallet', async () => {
  const etheriumProvider = await detectEthereumProvider();
  const ethersProvider = new ethers.providers.Web3Provider(
    etheriumProvider as any,
  );
  const [wallet] = await ethersProvider.listAccounts();

  return wallet;
});

const logIn = createAsyncThunk('user/logIn', async () => {
  const etheriumProvider = await detectEthereumProvider();
  const ethersProvider = new ethers.providers.Web3Provider(
    etheriumProvider as any,
  );

  const [wallet] = await ethersProvider.send('eth_requestAccounts', []);

  return wallet;
});

export { fetchNetwork, fetchWallet, logIn };
