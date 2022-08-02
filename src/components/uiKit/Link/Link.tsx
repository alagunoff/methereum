import { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';

import { IProps } from './types';
import styles from './Link.module.scss';

function Link({
  theme = 'default',
  to,
  isExternal,
  children,
}: PropsWithChildren<IProps>) {
  return isExternal ? (
    <a
      className={cn(styles.container, styles[`container_theme_${theme}`])}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  ) : (
    <RouterLink
      className={cn(styles.container, styles[`container_theme_${theme}`])}
      to={to}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
