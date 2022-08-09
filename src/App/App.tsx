import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppDispatch } from 'store/hooks';
import { fetchCurrenciesCost } from 'store/currencies';
import { RequireAccountAbsence } from 'router';
import * as routes from 'router/routes';
import { ConnectWallet, Mint } from 'pages';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrenciesCost());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.root}>
        <Route
          index
          element={
            <RequireAccountAbsence>
              <ConnectWallet />
            </RequireAccountAbsence>
          }
        />
        <Route path={routes.mint.relative} element={<Mint />} />
        <Route path='*' element={<Navigate to={routes.root} />} />
      </Route>
    </Routes>
  );
}

export default App;
