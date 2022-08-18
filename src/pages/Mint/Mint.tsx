import { useAccount } from 'wagmi';

import { Page } from 'components';
import { List } from 'components/uiKit';

import {
  MintingProgress, Airdrop, Presale, PublicSale,
} from './sections';
import styles from './Mint.module.scss';

function Mint() {
  const { isConnected } = useAccount();

  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Mint token</h1>
        <div className={styles.mintingProgress}>
          <MintingProgress />
        </div>
        {isConnected && (
          <List
            display="flex"
            justify="center"
            columnGap={20}
            items={[
              <Airdrop key="airdrop" />,
              <Presale key="presale" />,
              <PublicSale key="publicSale" />,
            ]}
            itemTheme="bordered"
          />
        )}
      </div>
    </Page>
  );
}

export default Mint;
