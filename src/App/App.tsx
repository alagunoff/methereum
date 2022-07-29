import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setActiveChain } from 'store/app';
import { METAMASK_PROVIDER, ETHERS_PROVIDER } from 'shared/constants';
import { checkIfChainRinkeby } from 'shared/utils';
import { Welcome } from 'pages';

function App() {
  const dispatch = useDispatch();

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
    }

    initializeApp();
  }, [dispatch]);

  return <Welcome />;
}

export default App;
