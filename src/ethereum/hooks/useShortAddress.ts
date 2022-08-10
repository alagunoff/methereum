import { useEthers, shortenAddress } from '@usedapp/core';

function useShortAddress(): string | undefined {
  const { account } = useEthers();

  return account ? shortenAddress(account) : undefined;
}

export default useShortAddress;
