interface IProps {
  theme?: 'default';
  type?: JSX.IntrinsicElements['button']['type'];
  disabled?: boolean;
  onClick?: () => void;
}

export type { IProps };
