import { useSelector } from 'react-redux';

import { selectUserWallet } from 'store/user';
import { List } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  const userWallet = useSelector(selectUserWallet);

  return (
    <header className={styles.container}>
      <div className={styles.wallet}>{userWallet}</div>
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
