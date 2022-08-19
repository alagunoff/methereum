import { useState } from 'react';
import { useCoingeckoPrice } from '@usedapp/coingecko';

import { useShortAddress, useBalance, CurrenciesCodes } from 'ethereum';
import {
  useIsUserInWhiteList,
  useTokensNumberAvailable,
  useTokenCost,
  usePresaleMint,
  useEvent,
  SalePhases,
} from 'contracts/bimkonEyes';
import { transformCurrencyToDisplayedCurrency } from 'shared/utils/transforms';
import { ConvertCurrencyModal } from 'components';
import { List, Counter, Button } from 'components/uiKit';
import Status, { StatusTypes } from 'components/uiKit/Status';

import { getWhitelistStatusText } from './utils';
import styles from './Presale.module.scss';

function Presale() {
  const etherUsdCost = useCoingeckoPrice('ethereum', 'usd');
  const shortAddress = useShortAddress();
  const balance = useBalance();
  const isUserInWhiteList = useIsUserInWhiteList(SalePhases.presale);
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.presale);
  const tokenCost = useTokenCost(SalePhases.presale);

  const [tokensNumber, setTokensNumber] = useState(0);
  const [convertCurrencyModalOpened, setConvertCurrencyModalOpened] = useState(false);

  const totalCost = tokenCost ? tokensNumber * tokenCost : 0;
  const hasUserEnoughMoneyToMint = balance ? balance >= totalCost : false;
  const canUserMint = !!(
    isUserInWhiteList
    && hasUserEnoughMoneyToMint
    && tokensNumberAvailable
  );

  const { mint, isWriting, isWaitingForTransaction } = usePresaleMint(
    tokensNumber,
    totalCost,
  );
  const mintButtonDisabled = !mint || isWriting || isWaitingForTransaction;

  useEvent('Transfer', handleMintTransactionMine);

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
    mint?.();
  }

  function handleMintTransactionMine() {
    setTokensNumber(0);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Presale mint</h2>
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
      {hasUserEnoughMoneyToMint ? (
        <div className={styles.whitelistStatus}>
          <Status
            type={
              isUserInWhiteList ? StatusTypes.approved : StatusTypes.refused
            }
          >
            {getWhitelistStatusText(isUserInWhiteList, shortAddress)}
          </Status>
        </div>
      ) : (
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

export default Presale;
