import { ConnectKitButton } from 'connectkit';
import { List, Link } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <ConnectKitButton />
      <nav className={styles.navigation}>
        <List
          display='flex'
          columnGap={10}
          items={LINKS.map(({ text, to }) => (
            <Link key={`${text}-${to}`} to={to} isExternal>
              {text}
            </Link>
          ))}
        />
      </nav>
    </header>
  );
}

export default Header;
