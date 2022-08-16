import { useContractRead } from 'wagmi';

import contract from '../contract';

function useReadMethod(methodName: string, args?: any | any[]) {
  return useContractRead({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: methodName,
    args,
  });
}

export default useReadMethod;
