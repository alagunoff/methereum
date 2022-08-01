import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchProvider, selectFetchProviderRequestState } from 'store/provider';
import {
  fetchNetwork,
  fetchWallet,
  selectFetchNetworkRequestState,
  selectFetchWalletRequestState,
} from 'store/user';
import * as routes from 'shared/router/routes';
import { WithWallet, WithoutWallet } from 'shared/router/hofs';
import { useAppDispatch } from 'shared/hooks';
import { checkIfRequestFulfilled } from 'shared/utils';
import { ConnectWallet, Mint } from 'pages';
import { Loader } from 'components/uiKit';

function App() {
  const dispatch = useAppDispatch();

  const fetchProviderRequestState = useSelector(
    selectFetchProviderRequestState,
  );

  const fetchNetworkRequestState = useSelector(selectFetchNetworkRequestState);
  const fetchWalletRequestState = useSelector(selectFetchWalletRequestState);

  useEffect(() => {
    async function initializeApp() {
      const {
        meta: { requestStatus },
      } = await dispatch(fetchProvider());

      if (checkIfRequestFulfilled(requestStatus)) {
        await dispatch(fetchNetwork());
        await dispatch(fetchWallet());
      }
    }

    initializeApp();
  }, [dispatch]);

  return fetchProviderRequestState.loading ||
    fetchNetworkRequestState.loading ||
    fetchWalletRequestState.loading ? (
    <Loader />
  ) : (
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
        path={routes.mint}
        element={
          <WithWallet>
            <Mint />
          </WithWallet>
        }
      />
      <Route path='*' element={<Navigate to={routes.root} replace />} />
    </Routes>
  );
}

export default App;
