import { List } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <List
          items={LINKS.map(({ text, href }) => (
            <a
              className={styles.link}
              key={`${text}-${href}`}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {text}
            </a>
          ))}
          display='flex'
          columnGap={10}
        />
      </nav>
    </header>
  );
}

export default Header;
