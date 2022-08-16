import { useAccount } from 'wagmi';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../contract';
import { SalePhases } from '../types';

function useProof(
  phase: Exclude<SalePhases, 'publicSale'>,
): string[] | undefined {
  const { address } = useAccount();

  return address
    ? contract[phase].merkleTree.getHexProof(keccak256(address))
    : undefined;
}

export default useProof;
