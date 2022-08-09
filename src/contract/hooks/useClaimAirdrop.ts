import { useEthers, useCall, useContractFunction } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';
import useProof from './useProof';

function useClaimAirdrop() {
  const { account } = useEthers();
  const proof = useProof('airdrop');
  const { value: getTokensNumberAvailableResponse } =
    useCall(
      account && {
        contract: contract.instance,
        method: contract.airdrop.methods.read.getTokensNumberAvailable,
        args: [account],
      },
    ) ?? {};
  const { send } = useContractFunction(
    contract.instance,
    contract.airdrop.methods.write.claim,
  );

  function claim() {
    if (proof && getTokensNumberAvailableResponse) {
      const tokensNumberAvailable = Number(
        ethers.utils.formatUnits(getTokensNumberAvailableResponse[0], 0),
      );

      if (tokensNumberAvailable > 0) {
        return send(proof, tokensNumberAvailable);
      }
    }

    return undefined;
  }

  return {
    claim,
  };
}

export default useClaimAirdrop;
