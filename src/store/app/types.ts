import { IChain } from 'shared/types';

interface IState {
  appInitialized?: true;
  activeChain?: IChain;
}

export type { IState };
