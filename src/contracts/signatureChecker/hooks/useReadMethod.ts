import { useContractRead } from 'wagmi';

import contract from '../contract';

interface IParameters {
  methodName: string;
  args?: unknown;
  enabled?: boolean;
}

function useReadMethod({ methodName, args, enabled }: IParameters) {
  return useContractRead({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: methodName,
    args,
    enabled,
  });
}

export default useReadMethod;
