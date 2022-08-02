import { useParams } from 'react-router-dom';

import { Page } from 'components';
import { List } from 'components/uiKit';

import { MintingProgress, Airdrop } from './sections';
import styles from './Token.module.scss';

function Token() {
  const { tokenId } = useParams();

  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Token {tokenId}</h1>
        <div className={styles.mintingProgress}>
          <MintingProgress />
        </div>
        <List
          display='flex'
          justify='center'
          columnGap={20}
          items={[<Airdrop key='airdrop' />]}
        />
      </div>
    </Page>
  );
}

export default Token;
