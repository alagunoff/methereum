import { useEffect, useReducer } from 'react';

import { METAMASK_PROVIDER, ETHERS_PROVIDER } from 'shared/constants';

import { Welcome } from 'pages';

import { reducer, initialState } from './store';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    METAMASK_PROVIDER.on('chainChanged', () => window.location.reload());

    async function initializeApp() {
      const { chainId } = await ETHERS_PROVIDER.getNetwork();
      dispatch({ type: 'setChainId', payload: chainId });
    }

    initializeApp();
  }, []);

  return <Welcome />;
}

export default App;
