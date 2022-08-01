import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserWallet } from 'store/user';
import * as routes from 'shared/router/routes';

function WithWallet({ children }: { children: JSX.Element }) {
  const userWallet = useSelector(selectUserWallet);

  return userWallet ? children : <Navigate to={routes.root} replace />;
}

function WithoutWallet({ children }: { children: JSX.Element }) {
  const userWallet = useSelector(selectUserWallet);

  return userWallet ? <Navigate to={routes.mint} replace /> : children;
}

export { WithWallet, WithoutWallet };
