import { createSlice } from '@reduxjs/toolkit';

import { fetchProvider } from './requests';
import initialState from './initialState';

const slice = createSlice({
  name: 'provider',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProvider.pending, (state) => {
        state.api.fetchProvider.loading = true;
        state.api.fetchProvider.loaded = false;
        delete state.api.fetchProvider.error;
      })
      .addCase(fetchProvider.fulfilled, (state) => {
        state.api.fetchProvider.loading = false;
        state.api.fetchProvider.loaded = true;
      })
      .addCase(fetchProvider.rejected, (state) => {
        state.api.fetchProvider.loading = false;
        state.api.fetchProvider.error =
          'Не удалось обнаружить ни одного провайдера';
      });
  },
});

export default slice;
