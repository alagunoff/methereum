import { useSelector } from 'react-redux';

import { selectUserBalance, selectUserWallet } from 'store/user';
import { List, Button, Status } from 'components/uiKit';

import { gasPrice, isUserApprovedToClaim } from './mockData';
import styles from './Airdrop.module.scss';

function Airdrop() {
  const balance = useSelector(selectUserBalance);
  const wallet = useSelector(selectUserWallet);

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
                {balance?.toFixed(4)} RinkebyETH
              </div>
            </div>,
            <div key='price' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>{gasPrice} RinkebyETH</div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>{gasPrice} RinkebyETH</div>
            </div>,
          ]}
        />
      </div>
      {isUserApprovedToClaim && (
        <div className={styles.claimButton}>
          <Button>Claim airdrop</Button>
        </div>
      )}
      <Status type={isUserApprovedToClaim ? 'approved' : 'refused'}>
        {isUserApprovedToClaim
          ? `${wallet?.short} approved for claim!`
          : `${wallet?.short} is not allowed for airdrop claim.`}
      </Status>
    </section>
  );
}

export default Airdrop;
