import { RootState } from 'store';

function selectFetchCurrenciesCostRequestState(state: RootState) {
  return state.currencies.api.fetchCurrenciesCost;
}
function selectEtherUsdCost(state: RootState) {
  return state.currencies.api.fetchCurrenciesCost?.data?.eth.usd;
}

export { selectFetchCurrenciesCostRequestState, selectEtherUsdCost };
