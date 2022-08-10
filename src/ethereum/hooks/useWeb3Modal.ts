import { useMemo } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import metalampEIcon from 'assets/icons/metalamp-e.svg';

function useWeb3Modal() {
  return useMemo(
    () =>
      new Web3Modal({
        network: 'goerli',
        providerOptions: {
          injected: {
            display: {
              logo: metalampEIcon,
              name: 'Injected',
              description: 'Connect with the provider in your Browser',
            },
            package: null,
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: 'ddd85c31303340c3bfefda8216c65ea7',
            },
          },
          coinbasewallet: {
            package: CoinbaseWalletSDK,
            options: {
              appName: 'eth',
              infuraId: 'ddd85c31303340c3bfefda8216c65ea7',
              chainId: 5,
            },
          },
        },
      }),
    [],
  );
}

export default useWeb3Modal;
