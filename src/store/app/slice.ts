import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IChain } from 'shared/types';

import initialState from './initialState';

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveChain: (state, action: PayloadAction<IChain>) => {
      state.activeChain = action.payload;
    },
  },
});

export default slice;
