import { List, Link } from 'components/uiKit';

import metalampEIcon from 'assets/icons/metalamp-e.svg';

import { LINKS } from './constants';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <List
        items={LINKS.map(({ to, imageAlt }, id) => (
          <Link key={`${to}-${id}`} to={to} isExternal>
            <img
              className={styles.image}
              src={metalampEIcon}
              alt={imageAlt}
              loading='lazy'
              width={40}
            />
          </Link>
        ))}
        display='flex'
        justify='center'
        columnGap={10}
        itemLineHeight={0}
      />
    </footer>
  );
}

export default Footer;
