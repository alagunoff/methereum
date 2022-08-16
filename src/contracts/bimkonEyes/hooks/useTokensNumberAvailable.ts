import { useAccount } from 'wagmi';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import { SalePhases } from '../types';
import useReadMethod from './useReadMethod';

function useTokensNumberAvailable(salePhase: SalePhases): number | undefined {
  const { address } = useAccount();
  const { data: tokensNumberAvailable } = useReadMethod(
    contract[salePhase].methods.read.getTokensNumberAvailable,
    address,
  );

  return tokensNumberAvailable
    ? parseBigNumberToNumber(tokensNumberAvailable)
    : undefined;
}

export default useTokensNumberAvailable;
