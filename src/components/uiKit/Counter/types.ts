interface IProps {
  defaultCount?: number;
  min?: number;
  max?: number;
  onChange?: (newCount: number) => void;
}

export type { IProps };
