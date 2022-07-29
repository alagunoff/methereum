import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsAppInitialized,
  selectActiveWallet,
  setAppInitialized,
  setActiveChain,
  setActiveWallet,
} from 'store/app';
import { PROVIDER, ETHERS_PROVIDER } from 'shared/constants';
import { checkIfChainRinkeby } from 'shared/utils';
import { Welcome } from 'pages';
import { Loader } from 'components';

function App() {
  const dispatch = useDispatch();

  const appInitialized = useSelector(selectIsAppInitialized);
  const activeWallet = useSelector(selectActiveWallet);

  useEffect(() => {
    async function initializeApp() {
      const { name, chainId } = await ETHERS_PROVIDER.getNetwork();
      dispatch(
        setActiveChain({
          id: chainId,
          name,
          isRinkeby: checkIfChainRinkeby(chainId),
        }),
      );

      const [wallet] = await ETHERS_PROVIDER.listAccounts();

      if (wallet) {
        dispatch(setActiveWallet(wallet));
      }

      dispatch(setAppInitialized(true));
    }

    if (PROVIDER) {
      PROVIDER.on('chainChanged', () => window.location.reload());
      PROVIDER.on('accountsChanged', ([wallet]: string[]) =>
        dispatch(setActiveWallet(wallet)),
      );

      initializeApp();
    }
  }, [dispatch]);

  function renderPage() {
    if (appInitialized) {
      return activeWallet ? (
        <div>your wallet {activeWallet} is connected</div>
      ) : (
        <Welcome />
      );
    }

    return <Loader />;
  }

  return renderPage();
}

export default App;
