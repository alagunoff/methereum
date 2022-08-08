import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../index';

function useProof(): string[] | undefined {
  const { account } = useEthers();

  return account
    ? contract.airdrop.merkleTree.getHexProof(keccak256(account))
    : undefined;
}

export default useProof;
