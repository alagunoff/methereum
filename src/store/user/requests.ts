import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchNetwork = createAsyncThunk('user/fetchNetwork', async () => {
  const network = await window.ethers.getNetwork();

  return network;
});

const fetchWallet = createAsyncThunk('user/fetchWallet', async () => {
  const [wallet] = await window.ethers.listAccounts();

  return wallet;
});

const logIn = createAsyncThunk('user/logIn', async () => {
  const [wallet] = await window.ethers.send('eth_requestAccounts', []);

  return wallet;
});

export { fetchNetwork, fetchWallet, logIn };
