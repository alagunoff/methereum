import { RootState } from 'store';

function selectFetchNetworkRequestState(state: RootState) {
  return state.user.api.fetchNetwork;
}

function selectFetchWalletRequestState(state: RootState) {
  return state.user.api.fetchWallet;
}

function selectUserNetwork(state: RootState) {
  return state.user.data.network;
}
function selectIsUserNetworkRinkeby(state: RootState) {
  return state.user.data.network?.isRinkeby;
}

function selectUserWallet(state: RootState) {
  return state.user.data.wallet;
}

export {
  selectFetchNetworkRequestState,
  selectFetchWalletRequestState,
  selectUserNetwork,
  selectIsUserNetworkRinkeby,
  selectUserWallet,
};
