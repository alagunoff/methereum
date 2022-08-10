import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../contract';
import useProof from './useProof';

function useCanUserPresaleMint(): boolean {
  const { account } = useEthers();
  const proof = useProof('presale');

  return account && proof
    ? contract.presale.merkleTree.verify(
        proof,
        keccak256(account),
        contract.presale.merkleTree.getHexRoot(),
      )
    : false;
}

export default useCanUserPresaleMint;
