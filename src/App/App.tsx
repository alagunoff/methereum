import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { initProvider } from 'store/provider';
import { initUser } from 'store/user';
import * as routes from 'shared/router/routes';
import { WithWallet, WithoutWallet } from 'shared/router/hofs';
import { useAppDispatch } from 'shared/hooks';
import { ConnectWallet, Token } from 'pages';
import { Loader } from 'components/uiKit';

function App() {
  const dispatch = useAppDispatch();

  const [appInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    async function initializeApp() {
      await dispatch(initProvider());

      if (window.ethersProvider) {
        await dispatch(initUser(window.ethersProvider));
      }

      setAppInitialized(true);
    }

    initializeApp();
  }, [dispatch]);

  return appInitialized ? (
    <Routes>
      <Route
        path={routes.root}
        element={
          <WithoutWallet>
            <ConnectWallet />
          </WithoutWallet>
        }
      />
      <Route
        path={routes.token}
        element={
          <WithWallet>
            <Token />
          </WithWallet>
        }
      />
      <Route path='*' element={<Navigate to={routes.root} replace />} />
    </Routes>
  ) : (
    <Loader />
  );
}

export default App;
