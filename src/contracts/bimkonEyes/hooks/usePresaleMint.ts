import { parseEther } from 'ethers/lib/utils';

import contract from '../contract';
import { SalePhases } from '../types';
import useProof from './useProof';
import useWriteMethod from './useWriteMethod';

function usePresaleMint(tokensNumber: number, totalCost: number) {
  const proof = useProof(SalePhases.presale);
  const {
    writingState: { write, isLoading: isWriting },
    waitingForTransactionState: { isLoading: isWaitingForTransaction },
  } = useWriteMethod({
    methodName: contract[SalePhases.presale].methods.write.mint,
    args: [proof, tokensNumber],
    enabled: !!(proof && tokensNumber && totalCost),
    value: parseEther(String(totalCost)),
  });

  return { mint: write, isWriting, isWaitingForTransaction };
}

export default usePresaleMint;
