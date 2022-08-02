import { IState } from './types';

const initialState: IState = {
  api: {
    initUser: { loading: false, loaded: false },
    logIn: { loading: false, loaded: false },
  },
};

export default initialState;
