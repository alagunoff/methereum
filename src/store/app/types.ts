import { IChain } from 'shared/types';

interface IState {
  appInitialized?: true;
  activeChain?: IChain;
  activeWallet?: string;
}

export type { IState };
