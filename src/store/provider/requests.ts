import { createAsyncThunk } from '@reduxjs/toolkit';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

const initProvider = createAsyncThunk('provider/initProvider', async () => {
  const provider: any = await detectEthereumProvider();

  if (provider) {
    window.ethersProvider = new ethers.providers.Web3Provider(provider);

    provider.on('chainChanged', () => window.location.reload());
    provider.on('accountsChanged', () => window.location.reload());
  } else {
    throw Error();
  }
});

export { initProvider };
