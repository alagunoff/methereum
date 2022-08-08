import { useSigner, useContract as useContractWagmi } from 'wagmi';

import contract from 'contract';

function useContract() {
  const { data: signer } = useSigner();

  return useContractWagmi({
    addressOrName: contract.address,
    contractInterface: contract.abi,
    signerOrProvider: signer,
  });
}

export default useContract;
