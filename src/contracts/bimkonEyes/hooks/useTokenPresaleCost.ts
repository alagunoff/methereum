import { useCall } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';

import contract from '../contract';

function useTokenPresaleCost(): number | undefined {
  const { value } =
    useCall({
      contract: contract.instance,
      method: contract.presale.methods.read.getTokenCost,
      args: [],
    }) ?? {};

  return value ? Number(formatEther(value[0])) : undefined;
}

export default useTokenPresaleCost;
