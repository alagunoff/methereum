import { List, Link } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <List
        items={LINKS.map(({ to, imagePath, imageAlt }) => (
          <Link key={imagePath} to={to} isExternal>
            <img
              className={styles.image}
              src={imagePath}
              alt={imageAlt}
              loading="lazy"
              width={40}
              height={40}
            />
          </Link>
        ))}
        display="flex"
        justify="center"
        columnGap={10}
        itemLineHeight={0}
      />
    </footer>
  );
}

export default Footer;
