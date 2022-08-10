import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../contract';

function useProof(phase: 'airdrop' | 'presale'): string[] | undefined {
  const { account } = useEthers();

  return account
    ? contract[phase].merkleTree.getHexProof(keccak256(account))
    : undefined;
}

export default useProof;
