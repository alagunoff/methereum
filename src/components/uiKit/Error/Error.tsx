import { PropsWithChildren } from 'react';

import styles from './Error.module.scss';

function Error({ children }: PropsWithChildren) {
  return <span className={styles.container}>{children}</span>;
}

export default Error;
