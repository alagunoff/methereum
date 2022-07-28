import Link from "@mui/material/Link";

import { LINKS } from "./constants";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          {LINKS.map(({ text, href }) => (
            <li>
              <Link
                href={href}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
