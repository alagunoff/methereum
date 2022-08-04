import { useState } from 'react';

import { Footer, ConnectWalletModal } from 'components';
import { Button } from 'components/uiKit';

import styles from './ConnectWallet.module.scss';

function ConnectWallet() {
  const [connectWalletModalOpened, setConnectWalletModalOpened] =
    useState(false);

  function handleConnectWalletModalOpen() {
    setConnectWalletModalOpened(true);
  }

  function handleConnectWalletModalClose() {
    setConnectWalletModalOpened(false);
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h1 className={styles.title}>Metalamp NFT Project</h1>
          <p className={styles.text}>
            Connect your wallet, verify your balance, select the number of NFTs
            you would like to purchase, and click Mint. Questions? Issues? Get
            the Mint Guide.
          </p>
          <Button onClick={handleConnectWalletModalOpen}>
            Connect my wallet
          </Button>
        </div>
      </div>
      <Footer />
      {connectWalletModalOpened && (
        <ConnectWalletModal onClose={handleConnectWalletModalClose} />
      )}
    </main>
  );
}

export default ConnectWallet;
