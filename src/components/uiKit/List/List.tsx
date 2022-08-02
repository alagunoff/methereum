import cn from 'classnames';

import { checkIfValueNumber } from 'shared/typeGuards';

import { IProps } from './types';
import styles from './List.module.scss';

function List({
  display,
  direction,
  justify,
  columnGap,
  rowGap,
  items,
  itemTheme,
  itemFontSize,
  itemLineHeight,
  itemTextAlign,
}: IProps) {
  return (
    <ul
      className={cn(styles.container, {
        [styles[`container_display_${display}`]]: display,
        [styles[`container_direction_${direction}`]]: direction,
        [styles[`container_justify_${justify}`]]: justify,
        [styles[`container_columnGap_${columnGap}`]]:
          checkIfValueNumber(columnGap),
        [styles[`container_rowGap_${rowGap}`]]: checkIfValueNumber(rowGap),
      })}
    >
      {items.map((item) => (
        <li
          key={item.key}
          className={cn(styles.item, {
            [styles[`item_theme_${itemTheme}`]]: itemTheme,
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
