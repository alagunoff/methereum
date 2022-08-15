import { useCallback } from 'react';
import { useEthers, useContractFunction } from '@usedapp/core';
import { arrayify, parseEther } from 'ethers/lib/utils';

import { useHashedCat } from 'contracts/signatureChecker';

import contract from '../contract';
import { SalePhases } from '../types';

function usePublicSaleMint() {
  const { account, library } = useEthers();
  const signer = library?.getSigner(account);

  const { send } = useContractFunction(
    contract.ethers,
    contract[SalePhases.publicSale].methods.write.mint,
  );
  const hashedCat = useHashedCat();

  const mint = useCallback(
    async (tokensNumber: number, tokensCost: number) => {
      if (signer && hashedCat) {
        const signedHashedCat = await signer.signMessage(arrayify(hashedCat));

        return send(tokensNumber, signedHashedCat, {
          value: parseEther(String(tokensCost)),
        });
      }

      return undefined;
    },
    [send, signer, hashedCat],
  );

  return mint;
}

export default usePublicSaleMint;
