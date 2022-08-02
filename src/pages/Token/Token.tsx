import { useParams } from 'react-router-dom';

import { Page } from 'components';
import tokenImage from 'assets/icons/token-1.gif';

import styles from './Token.module.scss';

function Token() {
  const { tokenId } = useParams();

  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Token {tokenId}</h1>
        <div className={styles.tokenWrapper}>
          <img
            className={styles.image}
            src={tokenImage}
            alt={`Token ${tokenId}`}
            width={278}
            height={278}
          />
          <div className={styles.subtitle}>Already minted</div>
        </div>
      </div>
    </Page>
  );
}

export default Token;
