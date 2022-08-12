import { useEthers } from '@usedapp/core';
import { SwapWidget } from '@uniswap/widgets';

import { Modal } from 'components/uiKit';

import { IProps } from './types';
import { tokens } from './data';
import styles from './ConvertCurrencyModal.module.scss';

function ConvertCurrencyModal({ onClose }: IProps) {
  const { library } = useEthers();

  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>Add funds</h2>
      <div className={styles.subtitle}>Easily convert between currencies</div>
      <div className={styles.widget}>
        <SwapWidget provider={library} hideConnectionUI tokenList={tokens} />
      </div>
    </Modal>
  );
}

export default ConvertCurrencyModal;
