import { RootState } from 'store';

function selectInithUserRequestState(state: RootState) {
  return state.user.api.initUser;
}

function selectMetaMaskProvider(state: RootState) {
  return state.user.data?.providers?.metaMask;
}

function selectUserNetwork(state: RootState) {
  return state.user.data?.network;
}

function selectUserWallet(state: RootState) {
  return state.user.data?.wallet;
}

function selectUserBalance(state: RootState) {
  return state.user.data?.balance;
}

export {
  selectInithUserRequestState,
  selectMetaMaskProvider,
  selectUserNetwork,
  selectUserWallet,
  selectUserBalance,
};
