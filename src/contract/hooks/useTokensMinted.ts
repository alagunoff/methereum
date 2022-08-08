import { ethers } from 'ethers';

import { useContractReadMethod } from 'etherium/hooks';
import contract from 'contract';

function useTokensMinted(): number | undefined {
  const { data } = useContractReadMethod(contract.methods.read.getTokensMinted);

  return data ? Number(ethers.utils.formatUnits(data, 0)) : undefined;
}

export default useTokensMinted;
