import { createAsyncThunk } from '@reduxjs/toolkit';
import CoinGecko from 'coingecko-api';

const coinGecko = new CoinGecko();

const fetchCurrenciesCost = createAsyncThunk('currencies/getCost', async () => {
  const ethereumCost = await coinGecko.coins.fetch('ethereum', {
    localization: false,
    tickers: false,
    community_data: false,
    developer_data: false,
    sparkline: false,
  });

  return { eth: ethereumCost.data };
});

export { fetchCurrenciesCost };
