import { useNavigate } from 'react-router-dom';
import { useAccount, useDisconnect } from 'wagmi';

import * as routes from 'router/routes';
import { normalizeAddressForDisplaying } from 'etherium/utils';
import { List, Link, Button } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect({
    onSuccess() {
      navigate(routes.root);
    },
  });

  function handleWalletDisconnect() {
    disconnect();
  }

  return (
    <header className={styles.container}>
      <div className={styles.walletWrapper}>
        <div className={styles.wallet}>
          {normalizeAddressForDisplaying(address)}
        </div>
        {isConnected && (
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
