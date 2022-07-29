import cn from 'classnames';

import { checkIfValueNumber } from 'shared/typeGuards';

import { IProps } from './types';
import styles from './List.module.scss';

function List({
  items,
  direction,
  justify,
  columnGap,
  itemFontSize,
  itemLineHeight,
  itemTextAlign,
}: IProps) {
  return (
    <ul
      className={cn(styles.container, {
        [styles[`container_direction_${direction}`]]: direction,
        [styles[`container_justify_${justify}`]]: justify,
        [styles[`container_columnGap_${columnGap}`]]:
          checkIfValueNumber(columnGap),
      })}
    >
      {items.map((item) => (
        <li
          key={item.key}
          className={cn(styles.item, {
            [styles[`item_fontSize_${itemFontSize}`]]:
              checkIfValueNumber(itemFontSize),
            [styles[`item_lineHeight_${itemLineHeight}`]]:
              checkIfValueNumber(itemLineHeight),
            [styles[`item_textAlign_${itemTextAlign}`]]: itemTextAlign,
          })}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
