import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import { SalePhases } from '../types';
import useReadMethod from './useReadMethod';

function useTokenCost(
  salePhase: Exclude<SalePhases, 'airdrop'>,
): number | undefined {
  const { data: tokenCost } = useReadMethod({
    methodName: contract[salePhase].methods.read.getTokenCost,
  });

  return tokenCost ? parseBigNumberToNumber(tokenCost, true) : undefined;
}

export default useTokenCost;
