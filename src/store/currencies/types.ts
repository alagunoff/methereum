interface IState {
  api: {
    fetchCurrenciesCost: {
      loading: boolean;
      data?: {
        eth: {
          usd: number;
        };
      };
      error?: string;
    };
  };
}

export type { IState };
