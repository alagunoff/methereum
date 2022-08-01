import { RootState } from 'store';

function selectFetchNetworkRequestState(state: RootState) {
  return state.user.api.fetchNetwork;
}

function selectFetchWalletRequestState(state: RootState) {
  return state.user.api.fetchWallet;
}

export { selectFetchNetworkRequestState, selectFetchWalletRequestState };
