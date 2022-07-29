function checkIfValueNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export { checkIfValueNumber };
