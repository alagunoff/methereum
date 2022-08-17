import { useCallback } from 'react';
import { useContractWrite } from 'wagmi';
import { parseEther } from 'ethers/lib/utils';

import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';

function usePresaleMint() {
  const proof = useProof(SalePhases.presale);
  const { write } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: contract[SalePhases.presale].methods.write.mint,
  });

  const mint = useCallback(
    (tokensNumber: number, totalCost: number) =>
      write({
        recklesslySetUnpreparedArgs: [proof, tokensNumber],
        recklesslySetUnpreparedOverrides: {
          value: parseEther(String(totalCost)),
        },
      }),
    [write, proof],
  );

  return mint;
}

export default usePresaleMint;
