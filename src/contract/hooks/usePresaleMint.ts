import { useContractFunction } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';
import useProof from './useProof';

function usePresaleMint() {
  const proof = useProof('presale');
  const { send } = useContractFunction(
    contract.instance,
    contract.presale.methods.write.mint,
  );

  function mint(tokensNumber: number, cost: number) {
    if (proof && tokensNumber > 0) {
      return send(proof, tokensNumber, {
        value: ethers.utils.parseEther(cost.toString()),
      });
    }

    return undefined;
  }

  return {
    mint,
  };
}

export default usePresaleMint;
