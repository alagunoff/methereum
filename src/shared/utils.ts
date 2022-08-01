import { RINKEBY_CHAIN_ID } from './constants';

function checkIfRequestFulfilled(requestStatus: 'fulfilled' | 'rejected') {
  return requestStatus === 'fulfilled';
}

function checkIfNetworkRinkeby(chainId: number) {
  return chainId === RINKEBY_CHAIN_ID;
}

export { checkIfRequestFulfilled, checkIfNetworkRinkeby };
