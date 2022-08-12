import { useCallback } from 'react';
import { useContractFunction } from '@usedapp/core';

import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';
import useTokensNumberAvailable from './useTokensNumberAvailable';

function useClaimAirdrop() {
  const proof = useProof(SalePhases.airdrop);
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.airdrop);
  const { send } = useContractFunction(
    contract.ethers,
    contract[SalePhases.airdrop].methods.write.claim,
  );

  const claim = useCallback(() => {
    send(proof, tokensNumberAvailable);
  }, [send, proof, tokensNumberAvailable]);

  return claim;
}

export default useClaimAirdrop;
