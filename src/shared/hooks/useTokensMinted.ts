import { ethers } from 'ethers';

import BIMKON_EYES_CONTRACT from 'etherium/contract';
import { useContractReadMethod } from 'etherium/hooks';

function useTokensMinted(): number | undefined {
  const { data } = useContractReadMethod(
    BIMKON_EYES_CONTRACT.methods.getTokensMinted,
  );

  return data ? Number(ethers.utils.formatUnits(data, 0)) : undefined;
}

export default useTokensMinted;
