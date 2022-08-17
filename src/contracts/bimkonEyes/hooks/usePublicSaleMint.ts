import { useCallback } from 'react';
import { useSignMessage, useContractWrite } from 'wagmi';
import { arrayify, parseEther } from 'ethers/lib/utils';

import { useHashedCat } from 'contracts/signatureChecker';

import contract from '../contract';
import { SalePhases } from '../types';

function usePublicSaleMint() {
  const hashedCat = useHashedCat();
  const { signMessageAsync } = useSignMessage({
    message: hashedCat ? arrayify(hashedCat) : undefined,
  });
  const { write } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: contract[SalePhases.publicSale].methods.write.mint,
  });

  const mint = useCallback(
    async (tokensNumber: number, totalCost: number) => {
      const signedHashedCat = await signMessageAsync();

      return write({
        recklesslySetUnpreparedArgs: [tokensNumber, signedHashedCat],
        recklesslySetUnpreparedOverrides: {
          value: parseEther(String(totalCost)),
        },
      });
    },
    [signMessageAsync, write],
  );

  return mint;
}

export default usePublicSaleMint;
