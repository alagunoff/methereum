import { ConnectKitButton } from 'connectkit';

import { Footer } from 'components';

import styles from './ConnectWallet.module.scss';

function ConnectWallet() {
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
          <ConnectKitButton />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default ConnectWallet;
