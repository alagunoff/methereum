import { usePrepareContractWrite, useContractWrite } from 'wagmi';

import contract from '../contract';

function useWriteMethod(methodName: string, args?: any | any[]) {
  const { config } = usePrepareContractWrite({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    functionName: methodName,
    args,
  });

  return useContractWrite(config);
}

export default useWriteMethod;
