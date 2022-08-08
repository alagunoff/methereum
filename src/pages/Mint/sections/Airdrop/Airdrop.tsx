import { useBalance } from 'etherium/hooks';
import { useCanUserClaimAirdrop } from 'contract/hooks';
import { RINKEBY_SIGN } from 'shared/constants';
import { List, Status } from 'components/uiKit';

import { gasPrice } from './mockData';
import styles from './Airdrop.module.scss';

function Airdrop() {
  const balance = useBalance();
  const canUserClaimAirdrop = useCanUserClaimAirdrop();
  // const write = useClaimAirdrop();
  console.log(canUserClaimAirdrop);

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
                {balance?.toFixed(4) ?? '-'} {RINKEBY_SIGN}
              </div>
            </div>,
            <div key='price' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>
                {gasPrice} {RINKEBY_SIGN}
              </div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {gasPrice} {RINKEBY_SIGN}
              </div>
            </div>,
          ]}
        />
      </div>
      {canUserClaimAirdrop && (
        <div className={styles.claimButton}>
          {/* <Button onClick={() => write?.()}>Claim airdrop</Button> */}
        </div>
      )}
      <Status type={canUserClaimAirdrop ? 'approved' : 'refused'}>
        {canUserClaimAirdrop
          ? `wallet approved for claim!`
          : `wallet is not allowed for airdrop claim.`}
      </Status>
    </section>
  );
}

export default Airdrop;
