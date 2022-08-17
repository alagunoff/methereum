function getWhitelistStatusText(
  isUserInWhiteList: boolean,
  address?: string,
): string {
  return `${address} ${
    isUserInWhiteList
      ? 'approved for claim!'
      : 'is not allowed for airdrop claim.'
  }`;
}

export { getWhitelistStatusText };
