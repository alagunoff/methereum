import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUserBalance, selectUserWallet } from 'store/user';
import { ConvertCurrencyModal } from 'components';
import { List, Counter, Button, Status } from 'components/uiKit';

import { gasPrice, tokenPrice, isUserApprovedToMint } from './mockData';
import styles from './Presale.module.scss';

function Presale() {
  const balance = useSelector(selectUserBalance);
  const wallet = useSelector(selectUserWallet);

  const [tokensNumber, setTokensNumber] = useState(1);
  const [convertCurrencyModalOpened, setConvertCurrencyModalOpened] =
    useState(false);

  const price = tokensNumber * tokenPrice;
  const totalPrice = price + gasPrice;
  const hasUserEnoughMoneyToMint = (balance || 0) >= totalPrice;

  function handleTokensNumberChange(newCount: number) {
    setTokensNumber(newCount);
  }

  function handleConvertCurrencyModalOpen() {
    setConvertCurrencyModalOpened(true);
  }

  function handleConvertCurrencyModalClose() {
    setConvertCurrencyModalOpened(false);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Presale mint</h2>
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
            <div key='amount' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Amount</div>
              <div className={styles.itemValue}>
                <Counter
                  defaultCount={tokensNumber}
                  onChange={handleTokensNumberChange}
                />
              </div>
            </div>,
            <div key='price' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>
                {price.toFixed(1)} RinkebyETH
              </div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>{gasPrice} RinkebyETH</div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {totalPrice.toFixed(4)} RinkebyETH
              </div>
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
            ? `${wallet?.short} approved for presale mint!`
            : `${wallet?.short} is not in presale whitelist.`}
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
