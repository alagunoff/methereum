import { useCall } from '@usedapp/core';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';

function useTokensMinted(): number | undefined {
  const { value: getTokensNumberResponse } =
    useCall({
      contract: contract.ethers,
      method: contract.generalMethods.read.getTokensNumber,
      args: [],
    }) ?? {};

  return getTokensNumberResponse
    ? parseBigNumberToNumber(getTokensNumberResponse[0])
    : undefined;
}

export default useTokensMinted;
