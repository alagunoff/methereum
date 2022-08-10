import { useEthers } from '@usedapp/core';

import { useWeb3Modal } from 'ethereum';
import { Footer } from 'components';
import { Button } from 'components/uiKit';

import styles from './ConnectWallet.module.scss';

function ConnectWallet() {
  const { activate } = useEthers();
  const web3Modal = useWeb3Modal();

  async function handleWalletConnect() {
    const provider = await web3Modal.connect();

    await activate(provider);
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
          <Button onClick={handleWalletConnect}>Connect my wallet</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default ConnectWallet;
