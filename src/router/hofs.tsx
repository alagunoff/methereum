import { Navigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

import * as routes from 'router/routes';

function WithoutWallet({ children }: { children: JSX.Element }) {
  const { address } = useAccount();

  return address ? <Navigate to={routes.mint.root} /> : children;
}

export { WithoutWallet };
