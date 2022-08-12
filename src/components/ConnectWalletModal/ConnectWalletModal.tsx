import { useEthers } from '@usedapp/core';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { INFURA_PROJECT_ID } from 'ethereum';
import { Modal, List, Button } from 'components/uiKit';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const { activateBrowserWallet, activate } = useEthers();

  function handleMetaMaskWalletConnect() {
    activateBrowserWallet();
  }

  async function handleWalletConnect() {
    const provider = new WalletConnectProvider({
      infuraId: INFURA_PROJECT_ID,
    });

    await provider.enable();
    await activate(provider);
  }

  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>Choose your wallet</h2>
      <List
        rowGap={10}
        items={[
          <Button key='metaMask' onClick={handleMetaMaskWalletConnect}>
            MetaMask
          </Button>,
          <Button key='walletConnect' onClick={handleWalletConnect}>
            WalletConnect
          </Button>,
        ]}
        itemTextAlign='center'
      />
    </Modal>
  );
}

export default ConnectWalletModal;
