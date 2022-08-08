import { usePrepareContractWrite, useContractWrite } from 'wagmi';

import contract from 'contract';

function useContractWriteMethod(methodName: string, args?: any | any[]) {
  const { config } = usePrepareContractWrite({
    addressOrName: contract.address,
    contractInterface: contract.abi,
    functionName: methodName,
    args,
  });
  const { write } = useContractWrite(config);

  return write;
}

export default useContractWriteMethod;
