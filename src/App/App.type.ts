interface IState {
  chainId?: number;
}

type Action =
  | { type: 'setChainId'; payload: number }
  | { type: 'smth'; payload: number };

export type { IState, Action };
