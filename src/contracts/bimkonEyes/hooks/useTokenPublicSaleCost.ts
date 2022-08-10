import { useCall } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';

import contract from '../contract';

function useTokenPublicSaleCost(): number | undefined {
  const { value } =
    useCall({
      contract: contract.instance,
      method: contract.publicSale.methods.read.getTokenCost,
      args: [],
    }) ?? {};

  return value ? Number(formatEther(value[0])) : undefined;
}

export default useTokenPublicSaleCost;
