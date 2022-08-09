import { useEthers, useEtherBalance } from '@usedapp/core';
import { ethers } from 'ethers';
import { checkIfValueNumber } from 'shared/typeGuards';

import { useAppSelector } from 'store';
import { selectEtherUsdCost } from 'store/currencies';

interface IBalance {
  eth: number;
  usd?: number;
}

function useBalance(): IBalance | undefined {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const etherUsdCost = useAppSelector(selectEtherUsdCost);

  if (etherBalance) {
    const balance: IBalance = {
      eth: Number(ethers.utils.formatEther(etherBalance)),
    };

    if (checkIfValueNumber(etherUsdCost)) {
      balance.usd = balance.eth * etherUsdCost;
    }

    return balance;
  }

  return undefined;
}

export default useBalance;
