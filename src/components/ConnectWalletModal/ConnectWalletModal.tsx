import { useEthers } from '@usedapp/core';

import { Modal, List, Button } from 'components/uiKit';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const { activateBrowserWallet } = useEthers();

  function handleMetaMaskWalletConnect() {
    activateBrowserWallet();
  }

  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>Choose your wallet</h2>
      <List
        rowGap={10}
        items={[
          <div key='metaMask' className={styles.connectWalletButtonWrapper}>
            <Button onClick={handleMetaMaskWalletConnect}>MetaMask</Button>
          </div>,
        ]}
        itemTextAlign='center'
      />
    </Modal>
  );
}

export default ConnectWalletModal;
