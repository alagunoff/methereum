import { useShortAddress, useBalance, ETHER_CURRENCY_SIGN } from 'ethereum';
import { useCanUserClaimAirdrop, useClaimAirdrop } from 'contract/hooks';
import { useAppSelector } from 'store';
import { selectEtherUsdCost } from 'store/currencies';
import { List, Button, Status } from 'components/uiKit';

import styles from './Airdrop.module.scss';

function Airdrop() {
  const shortAddress = useShortAddress();
  const balance = useBalance();
  const canUserClaim = useCanUserClaimAirdrop();
  const { claim } = useClaimAirdrop();

  const etherUsdCost = useAppSelector(selectEtherUsdCost);

  const estimatedGasCost = 0;
  const totalCost = estimatedGasCost;

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
                {balance
                  ? `${balance.eth.toFixed(4)}${ETHER_CURRENCY_SIGN} ($${
                      balance.usd?.toFixed(0) ?? 0
                    })`
                  : 0}
              </div>
            </div>,
            <div key='price' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>
                {`${estimatedGasCost.toFixed(4)}${ETHER_CURRENCY_SIGN} ($${
                  etherUsdCost ? (estimatedGasCost * etherUsdCost).toFixed() : 0
                })`}
              </div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {`${totalCost.toFixed(4)}${ETHER_CURRENCY_SIGN} ($${
                  etherUsdCost ? (totalCost * etherUsdCost).toFixed() : 0
                })`}
              </div>
            </div>,
          ]}
        />
      </div>
      {canUserClaim && (
        <div className={styles.claimButton}>
          <Button onClick={claim}>Claim airdrop</Button>
        </div>
      )}
      <Status type={canUserClaim ? 'approved' : 'refused'}>
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
