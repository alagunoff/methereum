import { useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEthers, Goerli } from '@usedapp/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import metalampIcon from 'assets/icons/metalamp.svg';
import { routes } from 'router';
import { INFURA_PROJECT_ID } from 'ethereum';

function useWeb3Modal() {
  const { activate, deactivate } = useEthers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedActivate = useCallback(activate, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedDeactivate = useCallback(deactivate, []);

  const navigate = useNavigate();

  const web3Modal = useMemo(
    () =>
      new Web3Modal({
        network: 'goerli',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              logo: metalampIcon,
              name: 'Injected',
              description: 'Connect with the provider in your Browser',
            },
            package: null,
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: INFURA_PROJECT_ID,
            },
          },
          coinbasewallet: {
            package: CoinbaseWalletSDK,
            options: {
              appName: 'eth',
              infuraId: INFURA_PROJECT_ID,
              chainId: Goerli.chainId,
            },
          },
        },
      }),
    [],
  );

  const connect = useCallback(async () => {
    const provider = await web3Modal.connect();

    await memoizedActivate(provider);
  }, [web3Modal, memoizedActivate]);

  const disconnect = useCallback(() => {
    web3Modal.clearCachedProvider();
    memoizedDeactivate();

    setTimeout(() => navigate(routes.root), 100);
  }, [web3Modal, memoizedDeactivate, navigate]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [web3Modal.cachedProvider, connect]);

  return {
    connect,
    disconnect,
  };
}

export default useWeb3Modal;
