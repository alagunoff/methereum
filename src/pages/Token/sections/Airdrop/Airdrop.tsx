import { useSelector } from 'react-redux';
import cn from 'classnames';

import { selectUserBalance, selectUserShortWallet } from 'store/user';
import { List, Button } from 'components/uiKit';

import { gasPrice, isUserApprovedToClaim } from './mockData';
import styles from './Airdrop.module.scss';

function Airdrop() {
  const userBalance = useSelector(selectUserBalance);
  const userShortWallet = useSelector(selectUserShortWallet);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Airdrop</h2>
      <div className={styles.timer}>Time left: 00:48:00</div>
      <div className={styles.list}>
        <List
          display='flex'
          direction='column'
          rowGap={10}
          items={[
            <div className={styles.itemWrapper} key='balance'>
              <div className={styles.itemLabel}>Your balance</div>
              <div className={styles.itemValue}>
                {userBalance?.toFixed(2)} RinkebyETH
              </div>
            </div>,
            <div className={styles.itemWrapper} key='price'>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
            <div className={styles.itemWrapper} key='gas'>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>{gasPrice} RinkebyETH</div>
            </div>,
            <div className={styles.itemWrapper} key='total'>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>{gasPrice} RinkebyETH</div>
            </div>,
          ]}
        />
      </div>
      {isUserApprovedToClaim && (
        <div className={styles.button}>
          <Button>Claim airdrop</Button>
        </div>
      )}
      <div
        className={cn(styles.status, {
          [styles.status_type_approved]: isUserApprovedToClaim,
          [styles.status_type_refused]: !isUserApprovedToClaim,
        })}
      >
        {isUserApprovedToClaim
          ? `${userShortWallet} approved for claim!`
          : `${userShortWallet} is not allowed for airdrop claim.`}
      </div>
    </section>
  );
}

export default Airdrop;
