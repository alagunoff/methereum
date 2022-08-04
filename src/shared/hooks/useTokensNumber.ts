import { ethers } from 'ethers';

import bimkonEyesContract from 'etherium/contract';
import { useContractReadMethod } from 'etherium/hooks';

function useTokensNumber(): number | undefined {
  const { data } = useContractReadMethod(
    bimkonEyesContract.methods.getTokensNumber,
  );

  return data ? Number(ethers.utils.formatUnits(data, 0)) : undefined;
}

export default useTokensNumber;
