import { PropsWithChildren } from 'react';
import cn from 'classnames';

import { IProps } from './types';
import styles from './Status.module.scss';

function Status({ type, children }: PropsWithChildren<IProps>) {
  return (
    <div
      className={cn(styles.container, {
        [styles[`container_type_${type}`]]: type,
      })}
    >
      {children}
    </div>
  );
}

export default Status;
