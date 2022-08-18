import { useCallback } from 'react';
import { useSignMessage, useContractWrite, useWaitForTransaction } from 'wagmi';
import { arrayify, parseEther } from 'ethers/lib/utils';

import { useHashedCat } from 'contracts/signatureChecker';

import contract from '../contract';
import { SalePhases } from '../types';

function usePublicSaleMint() {
  const hashedCat = useHashedCat();
  const { signMessageAsync, isLoading: isMessageSigning } = useSignMessage({
    message: hashedCat ? arrayify(hashedCat) : undefined,
  });
  const {
    write,
    data,
    isLoading: isWriting,
  } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: contract[SalePhases.publicSale].methods.write.mint,
  });
  const { isLoading: isWaitingForTransaction } = useWaitForTransaction({
    hash: data?.hash,
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

  return {
    mint, isMessageSigning, isWriting, isWaitingForTransaction,
  };
}

export default usePublicSaleMint;
