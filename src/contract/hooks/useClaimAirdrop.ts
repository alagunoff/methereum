import { useCallback } from 'react';
import { useCall, useContractFunction } from '@usedapp/core';
import { ethers } from 'ethers';

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
      tokensMaxNumberToClaim[0]
        ? send([
            proof,
            Number(ethers.utils.formatUnits(tokensMaxNumberToClaim[0], 0)),
          ])
        : undefined,
    [send, proof, tokensMaxNumberToClaim],
  );

  return { claim };
}

export default useClaimAirdrop;
