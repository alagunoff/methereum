import { Routes, Route, Navigate } from 'react-router-dom';

import { WithoutWallet } from 'router/hofs';
import * as routes from 'router/routes';
import { ConnectWallet, Mint } from 'pages';

function App() {
  return (
    <Routes>
      <Route path={routes.root}>
        <Route
          index
          element={
            <WithoutWallet>
              <ConnectWallet />
            </WithoutWallet>
          }
        />
        <Route path={routes.mint.relative} element={<Mint />} />
        <Route path='*' element={<Navigate to={routes.root} />} />
      </Route>
    </Routes>
  );
}

export default App;
