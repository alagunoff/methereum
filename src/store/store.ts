import { configureStore } from '@reduxjs/toolkit';

import currenciesSlice from './currencies';

const store = configureStore({
  reducer: {
    currencies: currenciesSlice,
  },
});

export default store;
