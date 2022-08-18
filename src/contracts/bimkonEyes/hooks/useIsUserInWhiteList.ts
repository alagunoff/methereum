import { useAccount } from 'wagmi';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';

function useIsUserInWhiteList(
  salePhase: Exclude<SalePhases, 'publicSale'>,
): boolean {
  const { address } = useAccount();
  const proof = useProof(salePhase);

  return address && proof
    ? contract[salePhase].merkleTree.verify(
      proof,
      keccak256(address),
      contract[salePhase].merkleTree.getHexRoot(),
    )
    : false;
}

export default useIsUserInWhiteList;
