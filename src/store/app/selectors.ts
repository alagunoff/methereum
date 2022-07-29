import { RootState } from 'store';

function selectIsActiveChainRinkeby(state: RootState) {
  return state.app.activeChain?.isRinkeby;
}

export { selectIsActiveChainRinkeby };
