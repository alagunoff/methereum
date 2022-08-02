import { useSelector } from 'react-redux';

import { logIn, selectIsUserNetworkRinkeby } from 'store/user';
import { Modal, List, Button, Error } from 'components/uiKit';
import { useAppDispatch } from 'shared/hooks';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const dispatch = useAppDispatch();

  const isUserNetworkRinkeby = useSelector(selectIsUserNetworkRinkeby);

  function handleMetaMaskWalletConnect() {
    if (window.ethersProvider) {
      dispatch(logIn(window.ethersProvider));
    }
  }

  return (
    <Modal onClose={onClose}>
      {isUserNetworkRinkeby ? (
        <>
          <h2 className={styles.title}>Choose your wallet</h2>
          <List
            items={[
              <Button key='metaMask' onClick={handleMetaMaskWalletConnect}>
                Metamask
              </Button>,
            ]}
            itemTextAlign='center'
          />
        </>
      ) : (
        <Error>
          Your wallet is not connected to the right chain. Please connect to
          Rinkeby test network.
        </Error>
      )}
    </Modal>
  );
}

export default ConnectWalletModal;
