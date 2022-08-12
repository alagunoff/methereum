import { useState } from 'react';
import { useCoingeckoPrice } from '@usedapp/coingecko';

import { useShortAddress, useBalance, CurrenciesCodes } from 'ethereum';
import {
  useIsUserInWhiteList,
  useTokensNumberAvailable,
  useTokenCost,
  usePresaleMint,
  SalePhases,
} from 'contracts/bimkonEyes';
import { transformCurrencyToDisplayedCurrency } from 'shared/utils/transforms';
import { ConvertCurrencyModal } from 'components';
import { List, Counter, Button } from 'components/uiKit';
import Status, { StatusTypes } from 'components/uiKit/Status';

import styles from './Presale.module.scss';

function Presale() {
  const etherUsdCost = useCoingeckoPrice('ethereum', 'usd');
  const shortAddress = useShortAddress();
  const balance = useBalance();
  const isUserInWhiteList = useIsUserInWhiteList(SalePhases.presale);
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.presale);
  const tokenCost = useTokenCost(SalePhases.presale);
  const mint = usePresaleMint();

  const [tokensNumber, setTokensNumber] = useState(0);
  const [convertCurrencyModalOpened, setConvertCurrencyModalOpened] =
    useState(false);

  const estimatedGasCost = 0;
  const tokensCost = tokenCost ? tokensNumber * tokenCost : 0;
  const totalCost = tokensCost + estimatedGasCost;
  const hasUserEnoughMoneyToMint = balance && balance >= totalCost;
  const canUserMint = !!(
    isUserInWhiteList &&
    hasUserEnoughMoneyToMint &&
    tokensNumberAvailable
  );

  function handleTokensNumberChange(newTokensNumber: number) {
    setTokensNumber(newTokensNumber);
  }

  function handleConvertCurrencyModalOpen() {
    setConvertCurrencyModalOpened(true);
  }

  function handleConvertCurrencyModalClose() {
    setConvertCurrencyModalOpened(false);
  }

  function handleTokensMint() {
    mint(tokensNumber, totalCost);
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
                {transformCurrencyToDisplayedCurrency(balance, etherUsdCost)}
              </div>
            </div>,
            <div key='tokensNumber' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Amount</div>
              <div className={styles.itemValue}>
                <Counter
                  min={0}
                  defaultCount={tokensNumber}
                  max={tokensNumberAvailable}
                  onChange={handleTokensNumberChange}
                />
              </div>
            </div>,
            <div key='tokensCost' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Price</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(tokensCost, etherUsdCost)}
              </div>
            </div>,
            <div key='gasCost' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>GAS</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(
                  estimatedGasCost,
                  etherUsdCost,
                )}
              </div>
            </div>,
            <div key='totalCost' className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Total</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(totalCost, etherUsdCost)}
              </div>
            </div>,
          ]}
        />
      </div>
      {canUserMint && (
        <div className={styles.mintButton}>
          <Button onClick={handleTokensMint}>Mint {tokensNumber} NFT</Button>
        </div>
      )}
      {hasUserEnoughMoneyToMint ? (
        <Status
          type={isUserInWhiteList ? StatusTypes.approved : StatusTypes.refused}
        >
          {`${shortAddress} ${
            isUserInWhiteList
              ? 'approved for presale mint!'
              : 'is not in presale whitelist.'
          }`}
        </Status>
      ) : (
        <>
          <div className={styles.moneyLackStatus}>
            <Status type={StatusTypes.refused}>
              You don&apos;t have enough {CurrenciesCodes.ether} for minting NFT
            </Status>
          </div>
          <div className={styles.exchangeButton}>
            <Button onClick={handleConvertCurrencyModalOpen}>
              Exchange {CurrenciesCodes.ether}
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
