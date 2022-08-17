import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { BigNumber } from 'ethers';

import contract from '../contract';

interface IParameters {
  methodName: string;
  args?: unknown;
  enabled?: boolean;
  value?: BigNumber;
}

function useWriteMethod({ methodName, args, enabled, value }: IParameters) {
  const preparingDataState = usePrepareContractWrite({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: methodName,
    args,
    enabled,
    overrides: {
      value,
    },
  });
  const writingState = useContractWrite(preparingDataState.config);
  const waitingForTransactionState = useWaitForTransaction({
    hash: writingState.data?.hash,
  });

  return {
    preparingDataState,
    writingState,
    waitingForTransactionState,
  };
}

export default useWriteMethod;
