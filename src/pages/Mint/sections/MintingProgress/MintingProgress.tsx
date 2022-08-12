import tokenImage from 'assets/icons/token-1.gif';
import { useTokensMinted, useTokensNumber } from 'contracts/bimkonEyes';
import { ColorValues } from 'shared/types/Color';
import { getNumberPercentageBetweenTwoNumbers } from 'shared/utils/numbers';
import { getLinearGradient } from 'shared/utils/styles';

import styles from './MintingProgress.module.scss';

function MintingProgress() {
  const tokensMinted = useTokensMinted();
  const tokensNumber = useTokensNumber();

  const tokensMintedPercent = getNumberPercentageBetweenTwoNumbers(
    tokensMinted,
    tokensNumber,
  );

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
          backgroundImage: getLinearGradient({
            direction: 'right',
            startColor: ColorValues.silver,
            startColorToPercent: tokensMintedPercent,
            stopColor: ColorValues.white,
            stopColorFromPercent: tokensMintedPercent,
          }),
        }}
      />
      <div className={styles.progressWrapper}>
        <div className={styles.percentageProgress}>
          {tokensMintedPercent?.toFixed(2) ?? '-'}%
        </div>
        <div className={styles.progress}>
          {tokensMinted ?? '-'}/{tokensNumber ?? '-'}
        </div>
      </div>
    </section>
  );
}

export default MintingProgress;
