import { Navigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

import * as routes from 'router/routes';

function RequireDisconnection({ children }: { children: JSX.Element }) {
  const { isConnected } = useAccount();

  return isConnected ? <Navigate to={routes.mint.root} /> : children;
}

export { RequireDisconnection };
