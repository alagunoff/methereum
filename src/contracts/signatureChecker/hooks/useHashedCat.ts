import { useCall } from '@usedapp/core';

import contract from '../contract';

function useHashedCat(): string | undefined {
  const { value: getHashedCatResponse } =
    useCall({
      contract: contract.ethers,
      method: contract.generalMethods.read.getHashedCat,
      args: [],
    }) ?? {};

  return getHashedCatResponse?.[0];
}

export default useHashedCat;
