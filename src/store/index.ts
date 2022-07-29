import { configureStore } from '@reduxjs/toolkit';

import appSlice from './app';

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
