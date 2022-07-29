import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { selectIsActiveChainRinkeby } from 'store/app';
import { ETHERS_PROVIDER } from 'shared/constants';
import { List } from 'components/dataDisplay';

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
      <List
        items={[
          <button
            key='metamask'
            className={styles.button}
            type='button'
            onClick={handleMetaMaskWalletConnect}
          >
            Metamask
          </button>,
        ]}
        direction='column'
        itemTextAlign='center'
      />
    </Modal>
  );
}

export default ConnectWalletModal;
