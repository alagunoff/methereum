import { useEthers, useContractFunction } from '@usedapp/core';
import { arrayify, parseEther } from 'ethers/lib/utils';

import { useHashedCat } from 'contracts/signatureChecker';

import contract from '../contract';

function usePublicSaleMint() {
  const { account, library } = useEthers();
  const signer = library?.getSigner(account);

  const { send } = useContractFunction(
    contract.ethers,
    contract.publicSale.methods.write.mint,
  );
  const hashedCat = useHashedCat();

  async function mint(tokensNumber: number, tokensCost: number) {
    if (signer && hashedCat) {
      const signedHashedCat = await signer.signMessage(arrayify(hashedCat));

      return send(tokensNumber, signedHashedCat, {
        value: parseEther(String(tokensCost)),
      });
    }

    return undefined;
  }

  return {
    mint,
  };
}

export default usePublicSaleMint;
