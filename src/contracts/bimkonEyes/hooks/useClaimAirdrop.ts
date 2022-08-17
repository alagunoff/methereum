import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';
import useTokensNumberAvailable from './useTokensNumberAvailable';
import useWriteMethod from './useWriteMethod';

function useClaimAirdrop() {
  const proof = useProof(SalePhases.airdrop);
  const tokensNumberAvailable = useTokensNumberAvailable(SalePhases.airdrop);
  const {
    writingState: { write, isLoading: isWriting },
    waitingForTransactionState: { isLoading: isWaitingForTransaction },
  } = useWriteMethod({
    methodName: contract[SalePhases.airdrop].methods.write.claim,
    args: [proof, tokensNumberAvailable],
    enabled: !!(proof && tokensNumberAvailable),
  });

  return { claim: write, isWriting, isWaitingForTransaction };
}

export default useClaimAirdrop;
