import { useAccount } from 'wagmi';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import { SalePhases } from '../types';
import useReadMethod from './useReadMethod';

function useTokensNumberAvailable(salePhase: SalePhases): number | undefined {
  const { address } = useAccount();
  const { data: tokensNumberAvailable } = useReadMethod({
    methodName: contract[salePhase].methods.read.getTokensNumberAvailable,
    args: address,
    enabled: !!address,
  });

  return tokensNumberAvailable && parseBigNumberToNumber(tokensNumberAvailable);
}

export default useTokensNumberAvailable;
