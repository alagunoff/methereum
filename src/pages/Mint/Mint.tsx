import { Page } from 'components';
import { List } from 'components/uiKit';

import { MintingProgress, Airdrop, Presale } from './sections';
import styles from './Mint.module.scss';

function Mint() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Mint token</h1>
        <div className={styles.mintingProgress}>
          <MintingProgress />
        </div>
        <List
          display='flex'
          justify='center'
          columnGap={20}
          items={[<Airdrop key='airdrop' />, <Presale key='presale' />]}
          itemTheme='bordered'
        />
      </div>
    </Page>
  );
}

export default Mint;
