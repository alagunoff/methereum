import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import useReadMethod from './useReadMethod';
import useEvent from './useEvent';

function useTokensMinted(): number | undefined {
  const { data: tokensMinted, refetch } = useReadMethod({
    methodName: contract.generalMethods.read.getTokensMinted,
  });

  useEvent('Transfer', refetch);

  return tokensMinted && parseBigNumberToNumber(tokensMinted);
}

export default useTokensMinted;
