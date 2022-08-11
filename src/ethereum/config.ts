import { Config, Goerli } from '@usedapp/core';

import { GOERLI_ENDPOINT } from './constants';

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: GOERLI_ENDPOINT,
  },
};

export default config;
