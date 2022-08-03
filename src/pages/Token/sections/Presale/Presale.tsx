import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUserBalance, selectUserShortWallet } from 'store/user';
import { ConvertCurrencyModal } from 'components';
import { List, Button, Status } from 'components/uiKit';

import { gasPrice, tokenPrice, isUserApprovedToMint } from './mockData';
import styles from './Presale.module.scss';

function Presale() {
  const userBalance = useSelector(selectUserBalance);
  const userShortWallet = useSelector(selectUserShortWallet);

  const [convertCurrencyModalOpened, setCconvertCurrencyModalOpened] =
    useState(false);

  const price = 5 * tokenPrice;
  const totalPrice = price + gasPrice;
  const hasUserEnoughMoneyToMint = (userBalance || 0) >= totalPrice;

  function handleConvertCurrencyModalOpen() {
    setCconvertCurrencyModalOpened(true);
  }

  function handleConvertCurrencyModalClose() {
    setCconvertCurrencyModalOpened(false);
  }

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
        <div className={styles.mintButton}>
          <Button>Mint 5 NFT</Button>
        </div>
      )}
      {hasUserEnoughMoneyToMint ? (
        <Status type={isUserApprovedToMint ? 'approved' : 'refused'}>
          {isUserApprovedToMint
            ? `${userShortWallet} approved for presale mint!`
            : `${userShortWallet} is not in presale whitelist.`}
        </Status>
      ) : (
        <>
          <div className={styles.moneyLackStatus}>
            <Status type='refused'>
              You don&apos;t have enough RinkebyETH for minting NFT
            </Status>
          </div>
          <div className={styles.exchangeButton}>
            <Button onClick={handleConvertCurrencyModalOpen}>
              Exchange RinkebyETH
            </Button>
          </div>
        </>
      )}
      {convertCurrencyModalOpened && (
        <ConvertCurrencyModal onClose={handleConvertCurrencyModalClose} />
      )}
    </section>
  );
}

export default Presale;
