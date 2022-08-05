import { usePrepareContractWrite } from 'wagmi';

import contract from 'contract';

function useContractWriteMethod(methodName: string, args?: unknown[]) {
  const data = usePrepareContractWrite({
    addressOrName: contract.address,
    contractInterface: contract.abi,
    functionName: methodName,
    args,
  });
  console.log(data);
  return 1;
}

export default useContractWriteMethod;
