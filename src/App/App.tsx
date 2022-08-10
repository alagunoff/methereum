import { Routes, Route, Navigate } from 'react-router-dom';

import { RequireAccountAbsence } from 'router';
import * as routes from 'router/routes';
import { ConnectWallet, Mint } from 'pages';

function App() {
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
