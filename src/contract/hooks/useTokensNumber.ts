import { ethers } from 'ethers';

import { useContractReadMethod } from 'etherium/hooks';
import contract from 'contract';

function useTokensNumber(): number | undefined {
  const { data } = useContractReadMethod(contract.methods.getTokensNumber);

  return data ? Number(ethers.utils.formatUnits(data, 0)) : undefined;
}

export default useTokensNumber;
