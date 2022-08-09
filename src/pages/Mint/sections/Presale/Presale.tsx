import { useState } from 'react';

import { useShortAddress, useBalance, GOERLI_SIGN } from 'ethereum';
import {
  useCanUserPresaleMint,
  useTokensNumberAvailableToPresaleMint,
  useTokenPresaleCost,
  usePresaleMint,
} from 'contract/hooks';
import { ConvertCurrencyModal } from 'components';
import { List, Counter, Button, Status } from 'components/uiKit';

import styles from './Presale.module.scss';

function Presale() {
  const shortAddress = useShortAddress();
  const balance = useBalance() ?? 0;
  const canUserMint = useCanUserPresaleMint();
  const tokensNumberAvailable = useTokensNumberAvailableToPresaleMint() ?? 0;
  const tokenCost = useTokenPresaleCost() ?? 1;
  const { mint } = usePresaleMint();

  const [tokensNumber, setTokensNumber] = useState(1);
  const [convertCurrencyModalOpened, setConvertCurrencyModalOpened] =
    useState(false);

  const gasEstimatedCost = 0;
  const price = tokensNumber * tokenCost;
  const totalPrice = price + gasEstimatedCost;
  const hasUserEnoughMoneyToMint = balance >= totalPrice;

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
                {balance.toFixed(4)} {GOERLI_SIGN}
              </div>
            </div>,
            <div key='amount' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Amount</div>
              <div className={styles.itemValue}>
                <Counter
                  min={1}
                  defaultCount={1}
                  max={tokensNumberAvailable}
                  onChange={handleTokensNumberChange}
                />
              </div>
            </div>,
            <div key='price' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>
                {price.toFixed(4)} {GOERLI_SIGN}
              </div>
            </div>,
            <div key='gas' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>
                {gasEstimatedCost.toFixed(4)} {GOERLI_SIGN}
              </div>
            </div>,
            <div key='total' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {totalPrice.toFixed(4)} {GOERLI_SIGN}
              </div>
            </div>,
          ]}
        />
      </div>
      {canUserMint && hasUserEnoughMoneyToMint && (
        <div className={styles.mintButton}>
          <Button onClick={() => mint(tokensNumber, price)}>
            Mint {tokensNumber} NFT
          </Button>
        </div>
      )}
      {hasUserEnoughMoneyToMint ? (
        <Status type={canUserMint ? 'approved' : 'refused'}>
          {`${shortAddress} ${
            canUserMint
              ? 'approved for presale mint!'
              : 'is not in presale whitelist.'
          }`}
        </Status>
      ) : (
        <>
          <div className={styles.moneyLackStatus}>
            <Status type='refused'>
              You don&apos;t have enough {GOERLI_SIGN} for minting NFT
            </Status>
          </div>
          <div className={styles.exchangeButton}>
            <Button onClick={handleConvertCurrencyModalOpen}>
              Exchange {GOERLI_SIGN}
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
