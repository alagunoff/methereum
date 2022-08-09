import { configureStore } from '@reduxjs/toolkit';

import currenciesSlice from './currencies';

const store = configureStore({
  reducer: {
    currencies: currenciesSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
