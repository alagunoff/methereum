import { useAccount } from 'wagmi';
import { keccak256 } from 'ethers/lib/utils';

import contract from 'contract';

import useProof from './useProof';

function useCanUserClaimAirdrop(): boolean {
  const { address } = useAccount();
  const proof = useProof();

  return contract.airdropMerkleTree.verify(
    proof,
    keccak256(address || ''),
    contract.airdropMerkleTree.getHexRoot(),
  );
}

export default useCanUserClaimAirdrop;
