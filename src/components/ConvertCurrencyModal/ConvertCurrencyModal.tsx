import { useWebSocketProvider } from 'wagmi';
import { SwapWidget } from '@uniswap/widgets';

import { Modal } from 'components/uiKit';

import { IProps } from './types';
import { tokens } from './data';
import styles from './ConvertCurrencyModal.module.scss';

function ConvertCurrencyModal({ onClose }: IProps) {
  const webSocketProvider = useWebSocketProvider();

  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>Add funds</h2>
      <div className={styles.subtitle}>Easily convert between currencies</div>
      <div className={styles.widget}>
        <SwapWidget
          provider={webSocketProvider}
          hideConnectionUI
          tokenList={tokens}
        />
      </div>
    </Modal>
  );
}

export default ConvertCurrencyModal;
