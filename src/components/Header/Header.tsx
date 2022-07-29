import { List } from 'components/dataDisplay';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <List
          items={LINKS.map(({ text, href }) => (
            <a
              key={`${text}-${href}`}
              className={styles.link}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {text}
            </a>
          ))}
          columnGap={10}
        />
      </nav>
    </header>
  );
}

export default Header;
