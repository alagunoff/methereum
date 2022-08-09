import { useEthers, useCall } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';

function useTokensNumberAvailableToPresaleMint(): number | undefined {
  const { account } = useEthers();
  const { value } =
    useCall(
      account && {
        contract: contract.instance,
        method: contract.presale.methods.read.getTokensNumberAvailable,
        args: [account],
      },
    ) ?? {};

  return value ? Number(ethers.utils.formatUnits(value[0], 0)) : undefined;
}

export default useTokensNumberAvailableToPresaleMint;
