import { createAsyncThunk } from '@reduxjs/toolkit';
import detectEthereumProvider from '@metamask/detect-provider';

const fetchProvider = createAsyncThunk('provider/fetchProvider', async () => {
  const etheriumProvider: any = await detectEthereumProvider();

  if (etheriumProvider) {
    etheriumProvider.on('chainChanged', () => window.location.reload());
    etheriumProvider.on('accountsChanged', () => window.location.reload());
  } else {
    throw Error();
  }
});

export { fetchProvider };
