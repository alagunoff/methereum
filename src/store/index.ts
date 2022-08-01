import { configureStore } from '@reduxjs/toolkit';

import providerSlice from './provider';
import userSlice from './user';

const store = configureStore({
  reducer: {
    provider: providerSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
