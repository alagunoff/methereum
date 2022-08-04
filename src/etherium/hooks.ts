import { useContractRead } from 'wagmi';

import BIMKON_EYES_CONTRACT from './contract';

function useContractReadMethod(methodName: string) {
  return useContractRead({
    addressOrName: BIMKON_EYES_CONTRACT.address,
    contractInterface: BIMKON_EYES_CONTRACT.abi,
    functionName: methodName,
  });
}

export { useContractReadMethod };
