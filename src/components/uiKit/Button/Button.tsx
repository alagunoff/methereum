import { PropsWithChildren } from 'react';

import { IProps } from './types';
import styles from './Button.module.scss';

function Button({
  theme = 'bordered',
  type = 'button',
  disabled,
  children,
  onClick,
}: PropsWithChildren<IProps>) {
  return (
    <button
      className={`${styles.container} ${styles[`container_theme_${theme}`]}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
