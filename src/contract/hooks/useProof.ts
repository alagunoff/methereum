import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../index';

function useProof() {
  const { account } = useEthers();

  return contract.airdrop.merkleTree.getHexProof(keccak256(account || ''));
}

export default useProof;
