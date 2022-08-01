import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectFetchProviderRequestState } from 'store/provider';
import { Page, ConnectWalletModal } from 'components';
import { Error } from 'components/uiKit';

import styles from './ConnectWallet.module.scss';

function ConnectWallet() {
  const fetchProviderRequestState = useSelector(
    selectFetchProviderRequestState,
  );

  const [connectWalletModalShown, setConnectWalletModalShown] = useState(false);

  function handleConnectWalletModalShow() {
    setConnectWalletModalShown(true);
  }

  function handleConnectWalletModalClose() {
    setConnectWalletModalShown(false);
  }

  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <h1 className={styles.title}>Metalamp NFT Project</h1>
          <p className={styles.text}>
            Connect your wallet, verify your balance, select the number of NFTs
            you would like to purchase, and click Mint. Questions? Issues? Get
            the Mint Guide.
          </p>
          {fetchProviderRequestState.error ? (
            <Error>{fetchProviderRequestState.error}</Error>
          ) : (
            <button
              className={styles.button}
              type='button'
              onClick={handleConnectWalletModalShow}
            >
              Connect my wallet
            </button>
          )}
        </div>
      </div>
      {connectWalletModalShown && (
        <ConnectWalletModal onClose={handleConnectWalletModalClose} />
      )}
    </Page>
  );
}

export default ConnectWallet;
