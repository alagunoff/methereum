import { useCall } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';

function useTokensMinted(): number | undefined {
  const { value } =
    useCall({
      contract: contract.instance,
      method: contract.generalMethods.read.getTokensMinted,
      args: [],
    }) ?? {};

  return value ? Number(ethers.utils.formatUnits(value[0], 0)) : undefined;
}

export default useTokensMinted;
