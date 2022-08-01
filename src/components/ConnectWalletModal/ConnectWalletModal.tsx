import { useSelector } from 'react-redux';

import { logIn, selectIsUserNetworkRinkeby } from 'store/user';
import { Modal, List, Error } from 'components/uiKit';
import { useAppDispatch } from 'shared/hooks';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const dispatch = useAppDispatch();

  const isUserNetworkRinkeby = useSelector(selectIsUserNetworkRinkeby);

  function handleMetaMaskWalletConnect() {
    dispatch(logIn());
  }

  return (
    <Modal onClose={onClose}>
      {isUserNetworkRinkeby ? (
        <>
          <h2 className={styles.title}>Choose your wallet</h2>
          <List
            items={[
              <button
                key='metaMask'
                className={styles.button}
                type='button'
                onClick={handleMetaMaskWalletConnect}
              >
                Metamask
              </button>,
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
