import { useEthers, useCall } from '@usedapp/core';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import { SalePhases } from '../types';

function useTokensNumberAvailable(salePhase: SalePhases): number | undefined {
  const { account } = useEthers();
  const { value: getTokensNumberAvailableReponse } =
    useCall(
      account && {
        contract: contract.ethers,
        method: contract[salePhase].methods.read.getTokensNumberAvailable,
        args: [account],
      },
    ) ?? {};

  return getTokensNumberAvailableReponse
    ? parseBigNumberToNumber(getTokensNumberAvailableReponse[0])
    : undefined;
}

export default useTokensNumberAvailable;
