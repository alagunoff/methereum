import { createSlice } from '@reduxjs/toolkit';

import { checkIfNetworkRinkeby } from 'shared/utils';

import { fetchNetwork, fetchWallet, logIn } from './requests';
import initialState from './initialState';

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNetwork.pending, (state) => {
        state.api.fetchNetwork.loading = true;
        state.api.fetchNetwork.loaded = false;
        delete state.api.fetchNetwork.error;
      })
      .addCase(fetchNetwork.fulfilled, (state, action) => {
        state.api.fetchNetwork.loading = false;
        state.api.fetchNetwork.loaded = true;

        state.data.network = {
          isRinkeby: checkIfNetworkRinkeby(action.payload.chainId),
        };
      })
      .addCase(fetchNetwork.rejected, (state) => {
        state.api.fetchNetwork.loading = false;
        state.api.fetchNetwork.error = 'Не удалось получить сеть';
      });

    builder
      .addCase(fetchWallet.pending, (state) => {
        state.api.fetchWallet.loading = true;
        state.api.fetchWallet.loaded = false;
        delete state.api.fetchWallet.error;
      })
      .addCase(fetchWallet.fulfilled, (state, action) => {
        state.api.fetchWallet.loading = false;
        state.api.fetchWallet.loaded = true;

        state.data.wallet = action.payload;
      })
      .addCase(fetchWallet.rejected, (state) => {
        state.api.fetchWallet.loading = false;
        state.api.fetchWallet.error = 'Не удалось получить кошелек';
      });

    builder
      .addCase(logIn.pending, (state) => {
        state.api.logIn.loading = true;
        state.api.logIn.loaded = false;
        delete state.api.logIn.error;
      })
      .addCase(logIn.fulfilled, (state) => {
        state.api.logIn.loading = false;
        state.api.logIn.loaded = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.api.logIn.loading = false;
        state.api.logIn.error = 'Не удалось войти';
      });
  },
});

export default slice;
