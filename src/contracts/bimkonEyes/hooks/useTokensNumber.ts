import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import useReadMethod from './useReadMethod';

function useTokensMinted(): number | undefined {
  const { data: tokensNumber } = useReadMethod({
    methodName: contract.generalMethods.read.getTokensNumber,
  });

  return tokensNumber ? parseBigNumberToNumber(tokensNumber) : undefined;
}

export default useTokensMinted;
