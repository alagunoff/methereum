import { BigNumberish } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';

function parseBigNumberToNumber(
  bigNumber: BigNumberish,
  isEther?: boolean,
): number | undefined {
  return bigNumber
    ? Number(formatUnits(bigNumber, isEther ? 18 : 0))
    : undefined;
}

export { parseBigNumberToNumber };
