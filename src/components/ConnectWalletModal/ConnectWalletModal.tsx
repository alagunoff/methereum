import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { selectIsActiveChainRinkeby } from 'store/app';
import { ETHERS_PROVIDER } from 'shared/constants';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const isActiveChainRinkeby = useSelector(selectIsActiveChainRinkeby);
  console.log(isActiveChainRinkeby);
  function handleMetaMaskWalletConnect() {
    ETHERS_PROVIDER.send('eth_requestAccounts', []);
  }

  return (
    <Modal
      overlayClassName={styles.containerWrapper}
      className={styles.container}
      isOpen
      onRequestClose={onClose}
    >
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
    </Modal>
  );
}

export default ConnectWalletModal;
