interface IProps {
  theme?: 'bordered';
  type?: JSX.IntrinsicElements['button']['type'];
  disabled?: boolean;
  onClick?: () => void;
}

export type { IProps };
