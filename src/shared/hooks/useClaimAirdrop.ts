import bimkonEyesContract from 'etherium/contract';
import { useContractWriteMethod } from 'etherium/hooks';

function useClaimAirdrop(): number {
  useContractWriteMethod(bimkonEyesContract.methods.claimAirdrop);

  return 1;
}

export default useClaimAirdrop;
