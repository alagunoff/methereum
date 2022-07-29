import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsAppInitialized,
  setAppInitialized,
  setActiveChain,
  setActiveWallet,
} from 'store/app';
import { METAMASK_PROVIDER, ETHERS_PROVIDER } from 'shared/constants';
import { checkIfChainRinkeby } from 'shared/utils';
import { Welcome } from 'pages';
import { Loader } from 'components';

function App() {
  const dispatch = useDispatch();

  const appInitialized = useSelector(selectIsAppInitialized);

  useEffect(() => {
    METAMASK_PROVIDER.on('chainChanged', () => window.location.reload());

    async function initializeApp() {
      const { name, chainId } = await ETHERS_PROVIDER.getNetwork();
      dispatch(
        setActiveChain({
          id: chainId,
          name,
          isRinkeby: checkIfChainRinkeby(chainId),
        }),
      );

      const [activeWallet] = await ETHERS_PROVIDER.listAccounts();
      dispatch(setActiveWallet(activeWallet));

      dispatch(setAppInitialized(true));
    }

    initializeApp();
  }, [dispatch]);

  return appInitialized ? <Welcome /> : <Loader />;
}

export default App;
