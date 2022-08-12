import { useCallback } from 'react';
import { useContractFunction } from '@usedapp/core';
import { parseEther } from 'ethers/lib/utils';

import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';

function usePresaleMint() {
  const proof = useProof(SalePhases.presale);

  const { send } = useContractFunction(
    contract.ethers,
    contract[SalePhases.presale].methods.write.mint,
  );

  const mint = useCallback(
    (tokensNumber: number, tokensCost: number) =>
      send(proof, tokensNumber, {
        value: parseEther(String(tokensCost)),
      }),
    [send, proof],
  );

  return mint;
}

export default usePresaleMint;
