import { Page } from 'components';

import styles from './Mint.module.scss';

function Mint() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Example nft</h1>
        <div className={styles.nftWrapper}>
          <div className={styles.nft}>nft</div>
          <div className={styles.subtitle}>Already minted</div>
        </div>
      </div>
    </Page>
  );
}

export default Mint;
