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
  const prepareDataRequestState = usePrepareContractWrite({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: methodName,
    args,
    enabled,
    overrides: {
      value,
    },
  });
  const writeRequestState = useContractWrite(prepareDataRequestState.config);
  const waitForTransactionRequestState = useWaitForTransaction({
    hash: writeRequestState.data?.hash,
  });

  return {
    prepareDataRequestState,
    writeRequestState,
    waitForTransactionRequestState,
  };
}

export default useWriteMethod;
