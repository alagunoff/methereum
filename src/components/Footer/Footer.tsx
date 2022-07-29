import { List } from 'components/dataDisplay';

import { LINKS } from './constants';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <List
        items={LINKS.map(({ href, imageSrc, imageAlt }) => (
          <a
            key={`${href}-${imageSrc}`}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className={styles.image}
              src={imageSrc}
              alt={imageAlt}
              width={30}
              height={30}
            />
          </a>
        ))}
        justify='center'
        columnGap={10}
        itemLineHeight={0}
      />
    </footer>
  );
}

export default Footer;
