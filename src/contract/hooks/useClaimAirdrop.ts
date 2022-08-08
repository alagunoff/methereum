import { useContractWriteMethod, useContractReadMethod } from 'etherium/hooks';
import contract from 'contract';

import useProof from './useProof';

function useClaimAirdrop() {
  const proof = useProof();
  const { data } = useContractReadMethod(
    contract.methods.read.getTokensMaxNumberForAirdrop,
  );

  const write = useContractWriteMethod(contract.methods.write.claimAirdrop, [
    proof,
    data || 1,
  ]);

  return write;
}

export default useClaimAirdrop;
