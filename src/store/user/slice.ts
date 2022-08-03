import { createSlice } from '@reduxjs/toolkit';

import { initUser, logIn } from './requests';
import initialState from './initialState';

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(initUser.pending, (state) => {
        state.api.initUser.loading = true;
        state.api.initUser.loaded = false;
        delete state.api.initUser.error;
      })
      .addCase(initUser.fulfilled, (state, action) => {
        state.api.initUser.loading = false;
        state.api.initUser.loaded = true;

        state.data = action.payload;
      })
      .addCase(initUser.rejected, (state) => {
        state.api.initUser.loading = false;
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
      });
  },
});

export default slice;
