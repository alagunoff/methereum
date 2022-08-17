import contract from '../contract';
import useReadMethod from './useReadMethod';

function useHashedCat(): string | undefined {
  const { data: hashedCat } = useReadMethod({
    methodName: contract.generalMethods.read.getHashedCat,
  });

  return hashedCat && String(hashedCat);
}

export default useHashedCat;
