import { useSelector } from 'react-redux';

import { logIn, selectMetaMaskProvider, selectUserNetwork } from 'store/user';
import { Modal, List, Button, Error } from 'components/uiKit';
import { useAppDispatch } from 'shared/hooks';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const dispatch = useAppDispatch();

  const metaMaskProvider = useSelector(selectMetaMaskProvider);
  const network = useSelector(selectUserNetwork);

  function handleMetaMaskWalletConnect() {
    if (window.ethersProvider) {
      dispatch(logIn(window.ethersProvider));
    }
  }

  return (
    <Modal onClose={onClose}>
      {network?.isRinkeby && (
        <h2 className={styles.title}>Choose your wallet</h2>
      )}
      {network && !network.isRinkeby && (
        <div className={styles.invalidNetworkError}>
          <Error>
            Your wallet is not connected to the right network. Please connect to
            Rinkeby test network.
          </Error>
        </div>
      )}
      <List
        items={[
          <div
            key='metaMask'
            className={styles.connectMetaMaskWalletButtonWrapper}
          >
            <Button
              disabled={!metaMaskProvider || !network?.isRinkeby}
              onClick={handleMetaMaskWalletConnect}
            >
              Metamask
            </Button>
            {!metaMaskProvider && (
              <div className={styles.info}>
                Oops, it seems you do not have MetaMask provider, please install
                it first
              </div>
            )}
          </div>,
        ]}
        itemTextAlign='center'
      />
    </Modal>
  );
}

export default ConnectWalletModal;
