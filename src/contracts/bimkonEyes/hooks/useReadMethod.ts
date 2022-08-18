import { useContractRead } from 'wagmi';

import contract from '../contract';

interface IParameters {
  methodName: string;
  args?: unknown;
  watch?: boolean;
  enabled?: boolean;
}

function useReadMethod({
  methodName, args, watch, enabled,
}: IParameters) {
  return useContractRead({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: methodName,
    args,
    watch,
    enabled,
  });
}

export default useReadMethod;
