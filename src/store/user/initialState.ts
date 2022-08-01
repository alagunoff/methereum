import { IState } from './types';

const initialState: IState = {
  api: {
    fetchNetwork: { loading: false, loaded: false },
    fetchWallet: { loading: false, loaded: false },
    logIn: { loading: false, loaded: false },
  },
  data: {},
};

export default initialState;
