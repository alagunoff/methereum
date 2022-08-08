import { Config, Goerli } from '@usedapp/core';

const config: Config = {
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://goerli.infura.io/v3/ddd85c31303340c3bfefda8216c65ea7',
  },
};

export default config;
