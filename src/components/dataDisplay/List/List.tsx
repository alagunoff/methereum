import cn from 'classnames';

import { checkIfValueNumber } from 'shared/typeGuards';

import { IProps } from './types';
import styles from './List.module.scss';

function List({ items, justify, columnGap, itemLineHeight }: IProps) {
  return (
    <ul
      className={cn(styles.container, {
        [styles[`container_columnGap_${columnGap}`]]:
          checkIfValueNumber(columnGap),
        [styles[`container_justify_${justify}`]]: justify,
      })}
    >
      {items.map((item) => (
        <li
          key={item.key}
          className={cn(styles.item, {
            [styles[`item_lineHeight_${itemLineHeight}`]]:
              checkIfValueNumber(itemLineHeight),
          })}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
