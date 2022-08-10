import { useState } from 'react';

import { useBalance, ETHER_CURRENCY_SIGN } from 'ethereum';
import {
  useTokensNumberAvailableToPublicSaleMint,
  useTokenPublicSaleCost,
  usePublicSaleMint,
} from 'contract/hooks';
import { useAppSelector } from 'store';
import { selectEtherUsdCost } from 'store/currencies';
import { ConvertCurrencyModal } from 'components';
import { List, Counter, Button, Status } from 'components/uiKit';

import styles from './PublicSale.module.scss';

function PublicSale() {
  const balance = useBalance();
  const tokensNumberAvailable = useTokensNumberAvailableToPublicSaleMint() ?? 0;
  const tokenCost = useTokenPublicSaleCost() ?? 1;
  const { mint } = usePublicSaleMint();

  const etherUsdCost = useAppSelector(selectEtherUsdCost);

  const [tokensNumber, setTokensNumber] = useState(1);
  const [convertCurrencyModalOpened, setConvertCurrencyModalOpened] =
    useState(false);

  const estimatedGasCost = 0;
  const cost = tokensNumber * tokenCost;
  const totalCost = cost + estimatedGasCost;
  const hasUserEnoughMoneyToMint = balance && balance.eth >= totalCost;

  function handleTokensNumberChange(newCount: number) {
    setTokensNumber(newCount);
  }

  function handleConvertCurrencyModalOpen() {
    setConvertCurrencyModalOpened(true);
  }

  function handleConvertCurrencyModalClose() {
    setConvertCurrencyModalOpened(false);
  }

  function handleTokensMint() {
    mint(tokensNumber, cost);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Public sale</h2>
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
                {`${cost.toFixed(4)}${ETHER_CURRENCY_SIGN} ($${
                  etherUsdCost ? (cost * etherUsdCost).toFixed() : 0
                })`}
              </div>
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
      {hasUserEnoughMoneyToMint ? (
        <div className={styles.mintButton}>
          <Button onClick={handleTokensMint}>Mint {tokensNumber} NFT</Button>
        </div>
      ) : (
        <>
          <div className={styles.moneyLackStatus}>
            <Status type='refused'>
              You don&apos;t have enough {ETHER_CURRENCY_SIGN} for minting NFT
            </Status>
          </div>
          <div className={styles.exchangeButton}>
            <Button onClick={handleConvertCurrencyModalOpen}>
              Exchange {ETHER_CURRENCY_SIGN}
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

export default PublicSale;
