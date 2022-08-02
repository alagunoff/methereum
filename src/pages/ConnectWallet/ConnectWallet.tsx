import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectInitProviderRequestState } from 'store/provider';
import { Page, ConnectWalletModal } from 'components';
import { Button, Error } from 'components/uiKit';

import styles from './ConnectWallet.module.scss';

function ConnectWallet() {
  const initProviderRequestState = useSelector(selectInitProviderRequestState);

  const [connectWalletModalOpened, setConnectWalletModalOpened] =
    useState(false);

  function handleConnectWalletModalOpen() {
    setConnectWalletModalOpened(true);
  }

  function handleConnectWalletModalClose() {
    setConnectWalletModalOpened(false);
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
          {initProviderRequestState.error ? (
            <Error>{initProviderRequestState.error}</Error>
          ) : (
            <Button onClick={handleConnectWalletModalOpen}>
              Connect my wallet
            </Button>
          )}
        </div>
      </div>
      {connectWalletModalOpened && (
        <ConnectWalletModal onClose={handleConnectWalletModalClose} />
      )}
    </Page>
  );
}

export default ConnectWallet;
