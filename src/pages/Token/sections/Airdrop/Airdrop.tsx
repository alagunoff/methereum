import { useSelector } from 'react-redux';

import { selectUserBalance } from 'store/user';

import { ClaimAirdropForm } from './components';
import styles from './Airdrop.module.scss';

function Airdrop() {
  const userBalance = useSelector(selectUserBalance);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Airdrop</h2>
      <div className={styles.timer}>Time left: 00:48:00</div>
      <div className={styles.balanceWrapper}>
        <div className={styles.balanceLabel}>Your balance</div>
        <div className={styles.balance}>{userBalance} RinkebyETH</div>
      </div>
      <ClaimAirdropForm />
    </section>
  );
}

export default Airdrop;
