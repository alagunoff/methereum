import { IState, Action } from './App.type';

const initialState: IState = {};

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case 'setChainId':
      return { ...state, chainId: action.payload };
    default:
      throw new Error();
  }
}

export { initialState, reducer };
