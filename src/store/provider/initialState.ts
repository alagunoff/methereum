import { IState } from './types';

const initialState: IState = {
  api: {
    initProvider: { loading: false, loaded: false },
  },
};

export default initialState;
