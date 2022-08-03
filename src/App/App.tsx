import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { initUser } from 'store/user';
import * as routes from 'shared/router/routes';
import { useAppDispatch } from 'shared/hooks';
import { ConnectWallet, Token } from 'pages';
import { Loader } from 'components/uiKit';

function App() {
  const dispatch = useAppDispatch();

  const [appInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    async function initApp() {
      await dispatch(initUser());

      setAppInitialized(true);
    }

    initApp();
  }, [dispatch]);

  return appInitialized ? (
    <Routes>
      <Route path={routes.root} element={<ConnectWallet />} />
      <Route path={routes.token} element={<Token />} />
      <Route path='*' element={<Navigate to={routes.root} replace />} />
    </Routes>
  ) : (
    <Loader />
  );
}

export default App;
