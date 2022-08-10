import { useEthers, useCall } from '@usedapp/core';
import { formatUnits } from 'ethers/lib/utils';

import contract from '../contract';

function useTokensNumberAvailableToPublicSaleMint(): number | undefined {
  const { account } = useEthers();
  const { value } =
    useCall(
      account && {
        contract: contract.instance,
        method: contract.publicSale.methods.read.getTokensNumberAvailable,
        args: [account],
      },
    ) ?? {};

  return value ? Number(formatUnits(value[0], 0)) : undefined;
}

export default useTokensNumberAvailableToPublicSaleMint;
