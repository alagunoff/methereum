interface IState {
  api: {
    initUser: {
      loading: boolean;
      loaded: boolean;
      error?: string;
    };
    logIn: {
      loading: boolean;
      loaded: boolean;
      error?: string;
    };
  };
  data?: IUser;
}

interface IUser {
  network: {
    isRinkeby: boolean;
  };
  wallet?: string;
  balance?: number;
}

export type { IState, IUser };
