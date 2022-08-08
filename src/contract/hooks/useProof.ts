import { useAccount } from 'wagmi';
import { keccak256 } from 'ethers/lib/utils';

import contract from 'contract';

function useProof() {
  const { address } = useAccount();

  return contract.airdropMerkleTree.getHexProof(keccak256(address || ''));
}

export default useProof;
