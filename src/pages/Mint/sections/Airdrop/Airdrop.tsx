import { useCoingeckoPrice } from '@usedapp/coingecko';

import { useShortAddress, useBalance } from 'ethereum';
import {
  useIsUserInWhiteList,
  useTokensNumberAvailable,
  useClaimAirdrop,
  SalePhases,
} from 'contracts/bimkonEyes';
import { transformCurrencyToDisplayedCurrency } from 'shared/utils/transforms';
import { List, Button } from 'components/uiKit';
import Status, { StatusTypes } from 'components/uiKit/Status';

import { getWhitelistStatusText } from './utils';
import styles from './Airdrop.module.scss';

function Airdrop() {
  const etherUsdCost = useCoingeckoPrice('ethereum', 'usd');
  const shortAddress = useShortAddress();
  const balance = useBalance();
  const isUserInWhiteList = useIsUserInWhiteList(SalePhases.airdrop);
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.airdrop);
  const { claim, isWriting, isWaitingForTransaction } = useClaimAirdrop();

  const canUserClaim = !!(isUserInWhiteList && tokensNumberAvailable);
  const claimButtonDisabled = !claim || isWriting || isWaitingForTransaction;

  function handleAirdropClaim() {
    claim?.();
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Airdrop</h2>
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
            <div key="tokenCost" className={styles.itemWrapper}>
              <div className={styles.itemLabel}>Token cost</div>
              <div className={styles.itemValue}>Free</div>
            </div>,
          ]}
        />
      </div>
      {canUserClaim && (
        <div className={styles.claimButton}>
          <Button disabled={claimButtonDisabled} onClick={handleAirdropClaim}>
            Claim airdrop
          </Button>
        </div>
      )}
      <div className={styles.whitelistStatus}>
        <Status
          type={isUserInWhiteList ? StatusTypes.approved : StatusTypes.refused}
        >
          {getWhitelistStatusText(isUserInWhiteList, shortAddress)}
        </Status>
      </div>
      {!tokensNumberAvailable && (
        <div className={styles.tokensLackStatus}>
          <Status type={StatusTypes.refused}>
            You don&apos;t have available tokens to claim
          </Status>
        </div>
      )}
    </section>
  );
}

export default Airdrop;
