import { RootState } from 'store';

function selectInithUserRequestState(state: RootState) {
  return state.user.api.initUser;
}

function selectUserNetwork(state: RootState) {
  return state.user.data?.network;
}
function selectIsUserNetworkRinkeby(state: RootState) {
  return state.user.data?.network?.isRinkeby;
}

function selectUserFullWallet(state: RootState) {
  return state.user.data?.wallet?.full;
}
function selectUserShortWallet(state: RootState) {
  return state.user.data?.wallet?.short;
}

function selectUserBalance(state: RootState) {
  return state.user.data?.balance;
}

export {
  selectInithUserRequestState,
  selectUserNetwork,
  selectIsUserNetworkRinkeby,
  selectUserFullWallet,
  selectUserShortWallet,
  selectUserBalance,
};
