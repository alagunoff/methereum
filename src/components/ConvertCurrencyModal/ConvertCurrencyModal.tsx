import { Modal } from 'components/uiKit';

import { IProps } from './types';
import styles from './ConvertCurrencyModal.module.scss';

function ConvertCurrencyModal({ onClose }: IProps) {
  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>Add funds</h2>
      <div className={styles.subtitle}>Easily convert between currencies</div>
    </Modal>
  );
}

export default ConvertCurrencyModal;
