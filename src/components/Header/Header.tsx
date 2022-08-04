import { useAccount } from 'wagmi';

import { normalizeAddressForDisplaying } from 'etherium/utils';
import { List, Link } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  const { address } = useAccount();

  return (
    <header className={styles.container}>
      <div className={styles.wallet}>
        {normalizeAddressForDisplaying(address)}
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
