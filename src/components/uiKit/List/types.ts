interface IProps {
  display?: 'flex';
  direction?: 'column';
  justify?: 'center';
  columnGap?: number;
  rowGap?: number;
  items: JSX.Element[];
  itemTheme?: 'bordered';
  itemFontSize?: number;
  itemLineHeight?: number;
  itemTextAlign?: 'center';
}

export type { IProps };
