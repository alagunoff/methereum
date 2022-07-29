import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IChain } from 'shared/types';

import initialState from './initialState';

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppInitialized: (state, action: PayloadAction<true>) => {
      state.appInitialized = action.payload;
    },
    setActiveChain: (state, action: PayloadAction<IChain>) => {
      state.activeChain = action.payload;
    },
    setActiveWallet: (state, action: PayloadAction<string>) => {
      state.activeWallet = action.payload;
    },
  },
});

export default slice;
