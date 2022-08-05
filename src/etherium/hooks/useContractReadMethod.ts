import { useContractRead } from 'wagmi';

import contract from 'contract';

function useContractReadMethod(methodName: string, args?: unknown[]) {
  return useContractRead({
    addressOrName: contract.address,
    contractInterface: contract.abi,
    functionName: methodName,
    args,
  });
}

export default useContractReadMethod;
