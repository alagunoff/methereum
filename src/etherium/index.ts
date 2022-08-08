import { Config, Goerli } from '@usedapp/core';

const config: Config = {
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/4d2XSoVdZ3nsSA_LQimbsDWMMsZJTOan',
  },
};

export default config;
