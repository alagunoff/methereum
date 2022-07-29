import { LINKS } from './constants';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          {LINKS.map(({ text, href }) => (
            <li className={styles.linkWrapper}>
              <a
                className={styles.link}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
