import { useEthers, useEtherBalance } from '@usedapp/core';
import { ethers } from 'ethers';

function useBalance(): number | undefined {
  const { account } = useEthers();
  const balance = useEtherBalance(account);

  return balance ? Number(ethers.utils.formatEther(balance)) : undefined;
}

export default useBalance;
