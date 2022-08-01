interface IState {
  api: {
    fetchNetwork: {
      loading: boolean;
      loaded: boolean;
      error?: string;
    };
    fetchWallet: {
      loading: boolean;
      loaded: boolean;
      error?: string;
    };
  };
  data: {
    network?: {
      isRinkeby: boolean;
    };
    wallet?: string;
  };
}

export type { IState };
