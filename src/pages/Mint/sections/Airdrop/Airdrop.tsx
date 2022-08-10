import { useCoingeckoPrice } from '@usedapp/coingecko';

import { useShortAddress, useBalance } from 'ethereum';
import { useCanUserClaimAirdrop, useClaimAirdrop } from 'contracts/bimkonEyes';
import { transformCurrencyToDisplayedCurrency } from 'shared/utils/transforms';
import { List, Button } from 'components/uiKit';
import Status, { StatusTypes } from 'components/uiKit/Status';

import styles from './Airdrop.module.scss';

function Airdrop() {
  const etherUsdCost = useCoingeckoPrice('ethereum', 'usd');
  const shortAddress = useShortAddress();
  const balance = useBalance();
  const canUserClaim = useCanUserClaimAirdrop();
  const { claim } = useClaimAirdrop();

  const estimatedGasCost = 0;
  const totalCost = estimatedGasCost;

  function handleAirdropClaim() {
    claim();
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Airdrop</h2>
      <div className={styles.timer}>Time left: 00:48:00</div>
      <div className={styles.list}>
        <List
          rowGap={10}
          items={[
            <div key='balance' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Your balance</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(balance, etherUsdCost)}
              </div>
            </div>,
            <div key='tokensCost' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(
                  estimatedGasCost,
                  etherUsdCost,
                )}
              </div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(totalCost, etherUsdCost)}
              </div>
            </div>,
          ]}
        />
      </div>
      {canUserClaim && (
        <div className={styles.claimButton}>
          <Button onClick={handleAirdropClaim}>Claim airdrop</Button>
        </div>
      )}
      <Status type={canUserClaim ? StatusTypes.approved : StatusTypes.refused}>
        {`${shortAddress} ${
          canUserClaim
            ? 'approved for claim!'
            : 'is not allowed for airdrop claim.'
        }`}
      </Status>
    </section>
  );
}

export default Airdrop;
