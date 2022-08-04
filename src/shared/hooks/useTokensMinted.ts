import { ethers } from 'ethers';

import bimkonEyesContract from 'etherium/contract';
import { useContractReadMethod } from 'etherium/hooks';

function useTokensMinted(): number | undefined {
  const { data } = useContractReadMethod(
    bimkonEyesContract.methods.getTokensMinted,
  );

  return data ? Number(ethers.utils.formatUnits(data, 0)) : undefined;
}

export default useTokensMinted;
