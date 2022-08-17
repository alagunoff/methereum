import { createClient } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'methereum',
    chains: [goerli],
  }),
);

export default client;
