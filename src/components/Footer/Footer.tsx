import { LINKS } from "./constants";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.links}>
        {LINKS.map(({ href, imageSrc, imageAlt }) => (
          <li>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.image}
                src={imageSrc}
                alt={imageAlt}
                width={30}
                height={30}
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
