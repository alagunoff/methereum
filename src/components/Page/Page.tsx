import { PropsWithChildren } from 'react';

import { Header, Footer } from 'components';

import styles from './Page.module.scss';

function Page({ children }: PropsWithChildren) {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </main>
  );
}

export default Page;
