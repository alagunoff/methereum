import { useCall } from '@usedapp/core';

import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';

function useTokensMinted(): number | undefined {
  const { value: getTokensMintedReponse } =
    useCall({
      contract: contract.ethers,
      method: contract.generalMethods.read.getTokensMinted,
      args: [],
    }) ?? {};

  return getTokensMintedReponse
    ? parseBigNumberToNumber(getTokensMintedReponse[0])
    : undefined;
}

export default useTokensMinted;
