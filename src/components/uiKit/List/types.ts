interface IProps {
  display?: 'flex';
  direction?: 'column';
  justify?: 'center';
  columnGap?: number;
  rowGap?: number;
  items: JSX.Element[];
  itemFontSize?: number;
  itemLineHeight?: number;
  itemTextAlign?: 'center';
}

export type { IProps };
