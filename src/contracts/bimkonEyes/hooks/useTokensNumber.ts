import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import useReadMethod from './useReadMethod';

function useTokensMinted(): number | undefined {
  const { data: tokensNumber } = useReadMethod(
    contract.generalMethods.read.getTokensNumber,
  );

  return tokensNumber ? parseBigNumberToNumber(tokensNumber) : undefined;
}

export default useTokensMinted;
