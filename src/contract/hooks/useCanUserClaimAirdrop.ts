import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../index';
import useProof from './useProof';

function useCanUserClaimAirdrop(): boolean {
  const { account } = useEthers();
  const proof = useProof();

  return contract.airdrop.merkleTree.verify(
    proof,
    keccak256(account || ''),
    contract.airdrop.merkleTree.getHexRoot(),
  );
}

export default useCanUserClaimAirdrop;
