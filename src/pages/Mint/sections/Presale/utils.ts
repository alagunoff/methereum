function getWhitelistStatusText(
  isUserInWhiteList: boolean,
  address?: string,
): string {
  return `${address} ${
    isUserInWhiteList
      ? 'approved for presale mint!'
      : 'is not in presale whitelist.'
  }`;
}

export { getWhitelistStatusText };
