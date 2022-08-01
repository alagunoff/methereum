import { IState } from './types';

const initialState: IState = {
  api: {
    fetchProvider: { loading: false, loaded: false },
  },
};

export default initialState;
