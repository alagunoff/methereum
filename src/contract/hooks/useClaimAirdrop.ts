import { useCall, useContractFunction } from '@usedapp/core';
import { ethers } from 'ethers';
import { useCallback } from 'react';

import contract from '../index';
import useProof from './useProof';

function useClaimAirdrop() {
  const proof = useProof();
  const { value: tokensMaxNumberToClaim } =
    useCall({
      contract: contract.instance,
      method: contract.airdrop.methods.read.getTokensMaxNumberToClaim,
      args: [],
    }) ?? {};
  const { send } = useContractFunction(
    contract.instance,
    contract.airdrop.methods.write.claim,
  );

  const claim = useCallback(
    () =>
      proof && tokensMaxNumberToClaim
        ? send(
            proof,
            Number(ethers.utils.formatUnits(tokensMaxNumberToClaim[0], 0)),
          )
        : undefined,
    [proof, tokensMaxNumberToClaim, send],
  );

  return {
    claim,
  };
}

export default useClaimAirdrop;
