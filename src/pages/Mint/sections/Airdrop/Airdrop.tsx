import { useState } from 'react';

import { useShortAddress, useBalance } from 'etherium/hooks';
import { useCanUserClaimAirdrop, useClaimAirdrop } from 'contract/hooks';
import { GOERLI_SIGN } from 'shared/constants';
import { List, Button, Status } from 'components/uiKit';

import styles from './Airdrop.module.scss';

function Airdrop() {
  const shortAddress = useShortAddress();
  const balance = useBalance();
  const canUserClaimAirdrop = useCanUserClaimAirdrop();
  const { claimAirdrop } = useClaimAirdrop();

  const [gasEstimationToClaim] = useState<number | undefined>(0);

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
                {balance?.toFixed(4) ?? '-'} {GOERLI_SIGN}
              </div>
            </div>,
            <div key='price' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>
                {gasEstimationToClaim} {GOERLI_SIGN}
              </div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {gasEstimationToClaim} {GOERLI_SIGN}
              </div>
            </div>,
          ]}
        />
      </div>
      {canUserClaimAirdrop && (
        <div className={styles.claimButton}>
          <Button onClick={claimAirdrop}>Claim airdrop</Button>
        </div>
      )}
      <Status type={canUserClaimAirdrop ? 'approved' : 'refused'}>
        {canUserClaimAirdrop
          ? `${shortAddress ?? '-'} approved for claim!`
          : `${shortAddress ?? '-'} is not allowed for airdrop claim.`}
      </Status>
    </section>
  );
}

export default Airdrop;
