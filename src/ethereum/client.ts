import { createClient, chain } from 'wagmi';
import { getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'Methereum',
    chains: [chain.goerli],
  }),
);

export default client;
