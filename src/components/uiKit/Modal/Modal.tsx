import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

import { IProps } from './types';
import styles from './Modal.module.scss';

function Modal({ children, onClose }: PropsWithChildren<IProps>) {
  return (
    <ReactModal
      overlayClassName={styles.containerWrapper}
      className={styles.container}
      isOpen
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
