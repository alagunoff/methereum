import { RootState } from 'store';

function selectfetchCurrenciesCostRequestState(state: RootState) {
  return state.currencies.api.fetchCurrenciesCost;
}
function selectEtherUsdCost(state: RootState) {
  return state.currencies.api.fetchCurrenciesCost?.data?.eth.usd;
}

export { selectfetchCurrenciesCostRequestState, selectEtherUsdCost };
