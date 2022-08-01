import { List } from 'components/uiKit';

import { LINKS } from './constants';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <List
        items={LINKS.map(({ href, text }, id) => (
          <a
            className={styles.link}
            key={`${href}-${id}`}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {text}
          </a>
        ))}
        display='flex'
        justify='center'
        columnGap={10}
        itemFontSize={0}
      />
    </footer>
  );
}

export default Footer;
