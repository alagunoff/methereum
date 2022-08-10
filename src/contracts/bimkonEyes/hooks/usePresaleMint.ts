import { useContractFunction } from '@usedapp/core';
import { parseEther } from 'ethers/lib/utils';

import contract from '../contract';
import useProof from './useProof';

function usePresaleMint() {
  const proof = useProof('presale');
  const { send } = useContractFunction(
    contract.instance,
    contract.presale.methods.write.mint,
  );

  function mint(tokensNumber: number, tokensCost: number) {
    if (proof && tokensNumber > 0) {
      return send(proof, tokensNumber, {
        value: parseEther(String(tokensCost)),
      });
    }

    return undefined;
  }

  return {
    mint,
  };
}

export default usePresaleMint;
