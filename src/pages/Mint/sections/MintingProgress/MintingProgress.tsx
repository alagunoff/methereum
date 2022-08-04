import tokenImage from 'assets/icons/token-1.gif';
import { ColorValues } from 'shared/types/Color';
import { useTokensMinted } from 'shared/hooks';

import styles from './MintingProgress.module.scss';

function MintingProgress() {
  const { tokensMinted, tokensNumber, tokensMintedPercent } = useTokensMinted();

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={tokenImage}
          alt='Token'
          width={278}
          height={278}
        />
      </div>
      <h2 className={styles.title}>Already minted</h2>
      <div
        className={styles.progressBar}
        style={{
          backgroundImage: `linear-gradient(to right, ${ColorValues.silver} ${tokensMintedPercent}%, ${ColorValues.white} ${tokensMintedPercent}%)`,
        }}
      />
      <div className={styles.progressWrapper}>
        <div className={styles.percentageProgress}>{tokensMintedPercent}%</div>
        <div className={styles.progress}>
          {tokensMinted}/{tokensNumber}
        </div>
      </div>
    </section>
  );
}

export default MintingProgress;
