import {
  useContractRead,
  usePrepareContractWrite,
  // useContractWrite,
} from 'wagmi';

import bimkonEyesContract from './contract';

function useContractReadMethod(methodName: string) {
  return useContractRead({
    addressOrName: bimkonEyesContract.address,
    contractInterface: bimkonEyesContract.abi,
    functionName: methodName,
  });
}

function useContractWriteMethod(methodName: string, args?: unknown[]) {
  const data = usePrepareContractWrite({
    addressOrName: bimkonEyesContract.address,
    contractInterface: bimkonEyesContract.abi,
    functionName: methodName,
    args,
  });
  console.log(data);
  return 1;
}

export { useContractReadMethod, useContractWriteMethod };
