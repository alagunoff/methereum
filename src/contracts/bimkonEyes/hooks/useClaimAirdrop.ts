import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';
import useTokensNumberAvailable from './useTokensNumberAvailable';
import useWriteMethod from './useWriteMethod';

function useClaimAirdrop() {
  const proof = useProof(SalePhases.airdrop);
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.airdrop);
  const { write, isLoading } = useWriteMethod(
    contract[SalePhases.airdrop].methods.write.claim,
    [proof, tokensNumberAvailable],
  );

  return { claim: write, isLoading };
}

export default useClaimAirdrop;
