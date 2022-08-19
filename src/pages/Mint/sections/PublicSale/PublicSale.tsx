import { useState } from 'react';
import { useCoingeckoPrice } from '@usedapp/coingecko';

import { useBalance, CurrenciesCodes } from 'ethereum';
import {
  useTokensNumberAvailable,
  useTokenCost,
  usePublicSaleMint,
  useEvent,
  SalePhases,
} from 'contracts/bimkonEyes';
import { transformCurrencyToDisplayedCurrency } from 'shared/utils/transforms';
import { ConvertCurrencyModal } from 'components';
import { List, Counter, Button } from 'components/uiKit';
import Status, { StatusTypes } from 'components/uiKit/Status';

import styles from './PublicSale.module.scss';

function PublicSale() {
  const etherUsdCost = useCoingeckoPrice('ethereum', 'usd');
  const balance = useBalance();
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.publicSale);
  const tokenCost = useTokenCost(SalePhases.publicSale);
  const {
    mint, isMessageSigning, isWriting, isWaitingForTransaction,
  } = usePublicSaleMint();

  const [tokensNumber, setTokensNumber] = useState(0);
  const [convertCurrencyModalOpened, setConvertCurrencyModalOpened] = useState(false);

  const totalCost = tokenCost ? tokensNumber * tokenCost : 0;
  const hasUserEnoughMoneyToMint = balance ? balance >= totalCost : false;
  const canUserMint = !!(hasUserEnoughMoneyToMint && tokensNumberAvailable);
  const mintButtonDisabled = tokensNumber === 0
    || isMessageSigning
    || isWriting
    || isWaitingForTransaction;

  useEvent('Transfer', handleMintTransactionMine);

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
    mint(tokensNumber, totalCost);
  }

  function handleMintTransactionMine() {
    setTokensNumber(0);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Public sale</h2>
      <div className={styles.list}>
        <List
          rowGap={10}
          items={[
            <div key="balance" className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Your balance</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(balance, etherUsdCost)}
              </div>
            </div>,
            <div key="tokensNumber" className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Tokens number</div>
              <div className={styles.itemValue}>
                <Counter
                  min={0}
                  count={tokensNumber}
                  max={tokensNumberAvailable || 0}
                  onChange={handleTokensNumberChange}
                />
              </div>
            </div>,
            <div key="tokenCost" className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Token cost</div>
              <div className={styles.itemValue}>
                {transformCurrencyToDisplayedCurrency(tokenCost, etherUsdCost)}
              </div>
            </div>,
            <div key="totalCost" className={styles.itemWrapper}>
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
          <Button disabled={mintButtonDisabled} onClick={handleTokensMint}>
            Mint
            {' '}
            {tokensNumber}
            {' '}
            NFT
          </Button>
        </div>
      )}
      {!hasUserEnoughMoneyToMint && (
        <div className={styles.moneyLackStatusWrapper}>
          <div className={styles.moneyLackStatus}>
            <Status type={StatusTypes.refused}>
              You don&apos;t have enough
              {' '}
              {CurrenciesCodes.ether}
              {' '}
              for minting NFT
            </Status>
          </div>
          <div className={styles.exchangeButton}>
            <Button onClick={handleConvertCurrencyModalOpen}>
              Exchange
              {' '}
              {CurrenciesCodes.ether}
            </Button>
          </div>
        </div>
      )}
      {!tokensNumberAvailable && (
        <div className={styles.tokensLackStatus}>
          <Status type={StatusTypes.refused}>
            You don&apos;t have available tokens to mint
          </Status>
        </div>
      )}
      {convertCurrencyModalOpened && (
        <ConvertCurrencyModal onClose={handleConvertCurrencyModalClose} />
      )}
    </section>
  );
}

export default PublicSale;
