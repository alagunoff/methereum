import { useEthers } from '@usedapp/core';
import { Navigate } from 'react-router-dom';

import * as routes from 'router/routes';

function RequireAccountAbsence({ children }: { children: JSX.Element }) {
  const { account } = useEthers();

  return account ? <Navigate to={routes.mint.root} /> : children;
}

export { RequireAccountAbsence };
