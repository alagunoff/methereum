interface IState {
  api: {
    fetchProvider: {
      loading: boolean;
      loaded: boolean;
      error?: string;
    };
  };
}

export type { IState };
