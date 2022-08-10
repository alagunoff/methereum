interface IProps {
  type: StatusTypes;
}

enum StatusTypes {
  approved = 'approved',
  refused = 'refused',
}

export { StatusTypes };
export type { IProps };
