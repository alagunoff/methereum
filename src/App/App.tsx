import { Routes, Route, Navigate } from 'react-router-dom';

import { RequireDisconnection, routes } from 'router';
import { ConnectWallet, Mint } from 'pages';

function App() {
  return (
    <Routes>
      <Route path={routes.root}>
        <Route
          index
          element={(
            <RequireDisconnection>
              <ConnectWallet />
            </RequireDisconnection>
          )}
        />
        <Route path={routes.mint.relative} element={<Mint />} />
        <Route path="*" element={<Navigate to={routes.root} />} />
      </Route>
    </Routes>
  );
}

export default App;
