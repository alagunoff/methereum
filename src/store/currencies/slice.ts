import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrenciesCost } from './requests';
import initialState from './initialState';

const slice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrenciesCost.pending, (state) => {
        state.api.fetchCurrenciesCost.loading = true;
        delete state.api.fetchCurrenciesCost.data;
        delete state.api.fetchCurrenciesCost.error;
      })
      .addCase(fetchCurrenciesCost.fulfilled, (state, action) => {
        state.api.fetchCurrenciesCost.loading = false;
        state.api.fetchCurrenciesCost.data = {
          eth: {
            usd: action.payload.eth.market_data.current_price.usd,
          },
        };
      })
      .addCase(fetchCurrenciesCost.rejected, (state) => {
        state.api.fetchCurrenciesCost.loading = false;
        state.api.fetchCurrenciesCost.error =
          'Не удалось получить данные по криптовалютам';
      });
  },
});

export default slice;
