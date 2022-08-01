import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchProvider, selectFetchProviderRequestState } from 'store/provider';
import {
  fetchNetwork,
  fetchWallet,
  selectFetchNetworkRequestState,
  selectFetchWalletRequestState,
} from 'store/user';
import { useAppDispatch } from 'shared/hooks';
import { checkIfRequestFulfilled } from 'shared/utils';
import { Welcome } from 'pages';
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
    <Welcome />
  );
}

export default App;
