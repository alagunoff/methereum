import { useEthers } from '@usedapp/core';

import { useWeb3Modal, useShortAddress } from 'ethereum/hooks';
import { List, Link, Button } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  const { account } = useEthers();
  const { disconnect } = useWeb3Modal();
  const shortAddress = useShortAddress();

  function handleWalletDisconnect() {
    disconnect();
  }

  return (
    <header className={styles.container}>
      <div className={styles.walletWrapper}>
        <div className={styles.wallet}>{shortAddress ?? '-'}</div>
        {account && (
          <Button onClick={handleWalletDisconnect}>Disconnect</Button>
        )}
      </div>
      <nav className={styles.navigation}>
        <List
          items={LINKS.map(({ text, to }) => (
            <Link key={`${text}-${to}`} to={to} isExternal>
              {text}
            </Link>
          ))}
          display='flex'
          columnGap={10}
        />
      </nav>
    </header>
  );
}

export default Header;
