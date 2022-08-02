import { createSlice } from '@reduxjs/toolkit';

import { initProvider } from './requests';
import initialState from './initialState';

const slice = createSlice({
  name: 'provider',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(initProvider.pending, (state) => {
        state.api.initProvider.loading = true;
        state.api.initProvider.loaded = false;
        delete state.api.initProvider.error;
      })
      .addCase(initProvider.fulfilled, (state) => {
        state.api.initProvider.loading = false;
        state.api.initProvider.loaded = true;
      })
      .addCase(initProvider.rejected, (state) => {
        state.api.initProvider.loading = false;
        state.api.initProvider.error =
          'Не удалось обнаружить ни одного провайдера';
      });
  },
});

export default slice;
