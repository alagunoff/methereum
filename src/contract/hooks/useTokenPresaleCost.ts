import { useCall } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';

function useTokenPresaleCost(): number | undefined {
  const { value } =
    useCall({
      contract: contract.instance,
      method: contract.presale.methods.read.getTokenCost,
      args: [],
    }) ?? {};

  return value ? Number(ethers.utils.formatEther(value[0])) : undefined;
}

export default useTokenPresaleCost;
