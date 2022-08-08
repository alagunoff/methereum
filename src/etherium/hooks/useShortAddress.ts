import { useEthers } from '@usedapp/core';

function useShortAddress() {
  const { account } = useEthers();

  return account
    ? `${account.substring(0, 6)}...${account.substring(account.length - 2)}`
    : undefined;
}

export default useShortAddress;
