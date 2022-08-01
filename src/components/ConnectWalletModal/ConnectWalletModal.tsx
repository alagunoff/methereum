// import { useSelector, useDispatch } from 'react-redux';

// import { selectIsActiveChainRinkeby, setActiveWallet } from 'store/user';
import { Modal, List, Error } from 'components/uiKit';

import { IProps } from './types';
import styles from './ConnectWalletModal.module.scss';

function ConnectWalletModal({ onClose }: IProps) {
  // const dispatch = useDispatch();

  // const isActiveChainRinkeby = useSelector(selectIsActiveChainRinkeby);

  async function handleMetaMaskWalletConnect() {
    // const [wallet] = await ETHERS_PROVIDER.send('eth_requestAccounts', []);
    // dispatch(setActiveWallet('asd'));
  }

  return (
    <Modal onClose={onClose}>
      {true ? (
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
