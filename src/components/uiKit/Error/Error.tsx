import { PropsWithChildren } from 'react';

import styles from './Error.module.scss';

function Error({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}

export default Error;
