import { useEthers } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';

import * as routes from 'router/routes';
import { useShortAddress } from 'etherium/hooks';
import { List, Link, Button } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  const { active, deactivate } = useEthers();
  const navigate = useNavigate();

  const shortAddress = useShortAddress();

  async function handleWalletDisconnect() {
    deactivate();
    navigate(routes.root);
  }

  return (
    <header className={styles.container}>
      <div className={styles.walletWrapper}>
        <div className={styles.wallet}>{shortAddress ?? '-'}</div>
        {active && <Button onClick={handleWalletDisconnect}>Disconnect</Button>}
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
