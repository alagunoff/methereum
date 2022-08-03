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
  providers?: {
    metaMask?: {
      connected: boolean;
    };
  };
  network?: {
    isRinkeby: boolean;
  };
  wallet?: {
    full: string;
    short: string;
  };
  balance?: number;
}

export type { IState, IUser };
