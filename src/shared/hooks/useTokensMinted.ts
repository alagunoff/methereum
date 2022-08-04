import { ethers } from 'ethers';

import BIMKON_EYES_CONTRACT from 'etherium/contract';
import { useContractReadMethod } from 'etherium/hooks';
import { checkIfValueNumber } from 'shared/typeGuards';
import { getNumberPercentageBetweenTwoNumbers } from 'shared/utils/numbers';

interface IResult {
  tokensMinted: string;
  tokensNumber: string;
  tokensMintedPercent: string;
}

function useTokensMinted(): IResult {
  const { data: tokensMintedData } = useContractReadMethod(
    BIMKON_EYES_CONTRACT.methods.getTokensMinted,
  );
  const tokensMinted =
    tokensMintedData === undefined
      ? undefined
      : Number(ethers.utils.formatUnits(tokensMintedData, 0));

  const { data: tokensNumberData } = useContractReadMethod(
    BIMKON_EYES_CONTRACT.methods.getTokensNumber,
  );
  const tokensNumber =
    tokensNumberData === undefined
      ? undefined
      : Number(ethers.utils.formatUnits(tokensNumberData, 0));

  return {
    tokensMinted: tokensMinted?.toFixed(0) ?? '-',
    tokensNumber: tokensNumber?.toFixed(0) ?? '-',
    tokensMintedPercent:
      checkIfValueNumber(tokensMinted) && checkIfValueNumber(tokensNumber)
        ? String(
            getNumberPercentageBetweenTwoNumbers(tokensMinted, tokensNumber),
          )
        : '-',
  };
}

export default useTokensMinted;
