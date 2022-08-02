interface IState {
  api: {
    initProvider: {
      loading: boolean;
      loaded: boolean;
      error?: string;
    };
  };
}

export type { IState };
