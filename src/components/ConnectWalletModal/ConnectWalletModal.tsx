import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsActiveChainRinkeby, setActiveWallet } from 'store/app';
import { ETHERS_PROVIDER } from 'shared/constants';
import { List } from 'components/dataDisplay';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  const dispatch = useDispatch();

  const isActiveChainRinkeby = useSelector(selectIsActiveChainRinkeby);

  async function handleMetaMaskWalletConnect() {
    const [wallet] = await ETHERS_PROVIDER.send('eth_requestAccounts', []);
    dispatch(setActiveWallet(wallet));
  }

  return (
    <Modal
      overlayClassName={styles.containerWrapper}
      className={styles.container}
      isOpen
      onRequestClose={onClose}
    >
      {isActiveChainRinkeby ? (
        <>
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
        </>
      ) : (
        <div className={styles.error}>
          Your wallet is not connected to the right chain. Please connect to
          Rinkeby test network.
        </div>
      )}
    </Modal>
  );
}

export default ConnectWalletModal;
