import { PropsWithChildren } from 'react';
import cn from 'classnames';

import { IProps } from './types';
import styles from './Button.module.scss';

function Button({
  theme = 'default',
  type = 'button',
  children,
  onClick,
}: PropsWithChildren<IProps>) {
  return (
    <button
      className={cn(styles.container, styles[`container_theme_${theme}`])}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
