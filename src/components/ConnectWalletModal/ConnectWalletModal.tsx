import { Dialog } from '@mui/material';

import { ETHERS_PROVIDER } from 'shared/constants';

import { IProps } from './ConnectWalletModal.type';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  function handleMetaMaskWalletConnect() {
    ETHERS_PROVIDER.send('eth_requestAccounts', []);
  }

  return (
    <Dialog open onClose={onClose}>
      <div className={styles.content}>
        <h2 className={styles.title}>Choose your wallet</h2>
        <ul className={styles.buttons}>
          <li className={styles.buttonWrapper}>
            <button
              className={styles.button}
              type='button'
              onClick={handleMetaMaskWalletConnect}
            >
              Metamask
            </button>
          </li>
        </ul>
      </div>
    </Dialog>
  );
}

export default ConnectWalletModal;
