import { useSelector } from 'react-redux';
import cn from 'classnames';

import { selectUserBalance, selectUserShortWallet } from 'store/user';
import { List, Button } from 'components/uiKit';

import { gasPrice, tokenPrice, isUserApprovedToMint } from './mockData';
import styles from './Presale.module.scss';

function Presale() {
  const userBalance = useSelector(selectUserBalance);
  const userShortWallet = useSelector(selectUserShortWallet);

  const price = 5 * tokenPrice;
  const totalPrice = price + gasPrice;
  const hasUserEnoughMoneyToMint = (userBalance || 0) >= totalPrice;
  console.log(hasUserEnoughMoneyToMint);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Presale mint</h2>
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
            <div className={styles.itemWrapper} key='amount'>
              <div className={styles.itemLabel}>Amount</div>
              <div className={styles.itemValue}>- 5/5 +</div>
            </div>,
            <div className={styles.itemWrapper} key='price'>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>{price} RinkebyETH</div>
            </div>,
            <div className={styles.itemWrapper} key='gas'>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>{gasPrice} RinkebyETH</div>
            </div>,
            <div className={styles.itemWrapper} key='total'>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>{totalPrice} RinkebyETH</div>
            </div>,
          ]}
        />
      </div>
      {isUserApprovedToMint && hasUserEnoughMoneyToMint && (
        <div className={styles.button}>
          <Button>Mint 5 NFT</Button>
        </div>
      )}
      <div
        className={cn(styles.status, {
          [styles.status_type_approved]: isUserApprovedToMint,
          [styles.status_type_refused]: !isUserApprovedToMint,
        })}
      >
        {isUserApprovedToMint
          ? `${userShortWallet} approved for presale mint!`
          : `${userShortWallet} is not in presale whitelist.`}
      </div>
    </section>
  );
}

export default Presale;
