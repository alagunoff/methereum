import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../contract';
import useProof from './useProof';

function useCanUserClaimAirdrop(): boolean {
  const { account } = useEthers();
  const proof = useProof('airdrop');

  return account && proof
    ? contract.airdrop.merkleTree.verify(
        proof,
        keccak256(account),
        contract.airdrop.merkleTree.getHexRoot(),
      )
    : false;
}

export default useCanUserClaimAirdrop;
