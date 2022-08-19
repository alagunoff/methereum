import { useAccount } from 'wagmi';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import { SalePhases } from '../types';
import useReadMethod from './useReadMethod';
import useEvent from './useEvent';

function useTokensNumberAvailable(salePhase: SalePhases): number | undefined {
  const { address } = useAccount();
  const { data: tokensNumberAvailable, refetch } = useReadMethod({
    methodName: contract[salePhase].methods.read.getTokensNumberAvailable,
    args: address,
    enabled: !!address,
  });

  useEvent('Transfer', refetch);

  return tokensNumberAvailable && parseBigNumberToNumber(tokensNumberAvailable);
}

export default useTokensNumberAvailable;
