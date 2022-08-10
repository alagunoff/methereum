import { useCall } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';

function useTokenPublicSaleCost(): number | undefined {
  const { value } =
    useCall({
      contract: contract.instance,
      method: contract.publicSale.methods.read.getTokenCost,
      args: [],
    }) ?? {};

  return value ? Number(ethers.utils.formatEther(value[0])) : undefined;
}

export default useTokenPublicSaleCost;
