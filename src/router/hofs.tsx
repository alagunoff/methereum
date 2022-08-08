import { useEthers } from '@usedapp/core';
import { Navigate } from 'react-router-dom';

import * as routes from 'router/routes';

function RequireDisconnection({ children }: { children: JSX.Element }) {
  const { active } = useEthers();

  return active ? <Navigate to={routes.mint.root} /> : children;
}

export { RequireDisconnection };
