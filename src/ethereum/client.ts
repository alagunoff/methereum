import { createClient } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'Methereum',
    chains: [goerli],
  }),
);

export default client;
