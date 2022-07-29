import { RINKEBY_CHAIN_ID } from './constants';

function checkIfChainRinkeby(chainId: number) {
  return chainId === RINKEBY_CHAIN_ID;
}

export { checkIfChainRinkeby };
