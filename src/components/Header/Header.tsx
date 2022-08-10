import { useEthers } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';

import { useShortAddress } from 'ethereum/hooks';
import { routes } from 'router';
import { List, Link, Button } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  const { account, deactivate } = useEthers();
  const shortAddress = useShortAddress();

  const navigate = useNavigate();

  function handleWalletDisconnect() {
    deactivate();

    setTimeout(() => navigate(routes.root), 100);
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
