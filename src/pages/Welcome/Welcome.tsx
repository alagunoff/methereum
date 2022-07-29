import { useState } from 'react';

import { Header, Footer, ConnectWalletModal } from 'components';

import styles from './Welcome.module.scss';

function Welcome() {
  const [connectWalletModalShown, setConnectWalletModalShown] = useState(false);

  function handleConnectWalletModalShow() {
    setConnectWalletModalShown(true);
  }

  function handleConnectWalletModalClose() {
    setConnectWalletModalShown(false);
  }

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h1 className={styles.title}>Metalamp NFT Project</h1>
          <p className={styles.text}>
            Connect your wallet, verify your balance, select the number of NFTs
            you would like to purchase, and click Mint. Questions? Issues? Get
            the Mint Guide.
          </p>
          <button
            className={styles.button}
            type='button'
            onClick={handleConnectWalletModalShow}
          >
            Connect my wallet
          </button>
        </div>
      </div>
      <Footer />
      {connectWalletModalShown && (
        <ConnectWalletModal onClose={handleConnectWalletModalClose} />
      )}
    </main>
  );
}

export default Welcome;
