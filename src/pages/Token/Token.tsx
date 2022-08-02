import { useParams } from 'react-router-dom';

import { Page } from 'components';

import { MintingProgress } from './sections';
import styles from './Token.module.scss';

function Token() {
  const { tokenId } = useParams();

  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Token {tokenId}</h1>
        <MintingProgress />
      </div>
    </Page>
  );
}

export default Token;
