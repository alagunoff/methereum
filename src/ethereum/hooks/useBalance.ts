import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';

function useBalance(): number | undefined {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return etherBalance ? Number(formatEther(etherBalance)) : undefined;
}

export default useBalance;
