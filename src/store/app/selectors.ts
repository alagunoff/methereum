import { RootState } from 'store';

function selectIsAppInitialized(state: RootState) {
  return state.app.appInitialized;
}

function selectIsActiveChainRinkeby(state: RootState) {
  return state.app.activeChain?.isRinkeby;
}

function selectActiveWallet(state: RootState) {
  return state.app.activeWallet;
}

export {
  selectIsAppInitialized,
  selectIsActiveChainRinkeby,
  selectActiveWallet,
};
