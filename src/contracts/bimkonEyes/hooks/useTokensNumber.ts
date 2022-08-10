import { useCall } from '@usedapp/core';
import { formatUnits } from 'ethers/lib/utils';

import contract from '../contract';

function useTokensMinted(): number | undefined {
  const { value } =
    useCall({
      contract: contract.instance,
      method: contract.generalMethods.read.getTokensNumber,
      args: [],
    }) ?? {};

  return value ? Number(formatUnits(value[0], 0)) : undefined;
}

export default useTokensMinted;
