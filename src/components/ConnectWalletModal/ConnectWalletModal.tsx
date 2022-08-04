import { useConnect } from 'wagmi';

import { Modal, List, Button } from 'components/uiKit';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const { connectors, connect, isLoading } = useConnect();

  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>Choose your wallet</h2>
      <List
        rowGap={10}
        items={connectors.map((connector) => (
          <div key={connector.id} className={styles.connectWalletButtonWrapper}>
            <Button
              disabled={!connector.ready || isLoading}
              onClick={() => connect({ connector })}
            >
              {connector.name}
            </Button>
            {!connector.ready && (
              <div className={styles.info}>
                Oops, it seems {connector.name} wallet unsupported on your
                device
              </div>
            )}
          </div>
        ))}
        itemTextAlign='center'
      />
    </Modal>
  );
}

export default ConnectWalletModal;
