import { useCall } from '@usedapp/core';

import contract from '../contract';

function useHashedCat(): number | undefined {
  const { value: getHashedCatResponse } =
    useCall({
      contract: contract.instance,
      method: contract.generalMethods.read.getHashedCat,
      args: [],
    }) ?? {};

  return getHashedCatResponse ? getHashedCatResponse[0] : undefined;
}

export default useHashedCat;
