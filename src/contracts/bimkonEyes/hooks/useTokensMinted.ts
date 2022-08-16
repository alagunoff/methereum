import { parseBigNumberToNumber } from 'ethereum';

import contract from '../contract';
import useReadMethod from './useReadMethod';

function useTokensMinted(): number | undefined {
  const { data: tokensMinted } = useReadMethod(
    contract.generalMethods.read.getTokensMinted,
  );

  return tokensMinted ? parseBigNumberToNumber(tokensMinted) : undefined;
}

export default useTokensMinted;
