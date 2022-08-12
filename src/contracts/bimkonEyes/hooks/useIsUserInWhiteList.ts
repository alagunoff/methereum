import { useEthers } from '@usedapp/core';
import { keccak256 } from 'ethers/lib/utils';

import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';

function useIsUserInWhiteList(
  salePhase: Exclude<SalePhases, 'publicSale'>,
): boolean {
  const { account } = useEthers();
  const proof = useProof(salePhase);

  return account && proof
    ? contract[salePhase].merkleTree.verify(
        proof,
        keccak256(account),
        contract[salePhase].merkleTree.getHexRoot(),
      )
    : false;
}

export default useIsUserInWhiteList;
