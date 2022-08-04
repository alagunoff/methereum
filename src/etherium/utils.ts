function normalizeAddressForDisplaying(address?: string): string {
  return address
    ? `${address.substring(0, 6)}...${address.substring(address.length - 2)}`
    : '-';
}

export { normalizeAddressForDisplaying };
