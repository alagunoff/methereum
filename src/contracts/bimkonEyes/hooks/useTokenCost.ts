import { useCall } from '@usedapp/core';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import { SalePhases } from '../types';

function useTokenCost(
  salePhase: Exclude<SalePhases, 'airdrop'>,
): number | undefined {
  const { value: getTokenCostResponse } =
    useCall({
      contract: contract.ethers,
      method: contract[salePhase].methods.read.getTokenCost,
      args: [],
    }) ?? {};

  return getTokenCostResponse
    ? parseBigNumberToNumber(getTokenCostResponse[0], true)
    : undefined;
}

export default useTokenCost;
