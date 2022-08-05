import { useContractWriteMethod } from 'etherium/hooks';
import contract from 'contract';

function useClaimAirdrop(): number {
  useContractWriteMethod(contract.methods.claimAirdrop);

  return 1;
}

export default useClaimAirdrop;
