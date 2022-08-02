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

function selectUserWallet(state: RootState) {
  return state.user.data?.wallet;
}

function selectUserBalance(state: RootState) {
  return state.user.data?.balance;
}

export {
  selectInithUserRequestState,
  selectUserNetwork,
  selectIsUserNetworkRinkeby,
  selectUserWallet,
  selectUserBalance,
};
