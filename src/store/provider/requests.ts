import { createAsyncThunk } from '@reduxjs/toolkit';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

const fetchProvider = createAsyncThunk('provider/fetchProvider', async () => {
  const provider: any = await detectEthereumProvider();

  if (provider) {
    window.ethers = new ethers.providers.Web3Provider(provider);

    provider.on('chainChanged', () => window.location.reload());
    provider.on('accountsChanged', () => window.location.reload());
  } else {
    throw Error();
  }
});

export { fetchProvider };
