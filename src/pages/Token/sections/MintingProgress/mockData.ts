import { getNumberPercentageBetweenTwoNumbers } from 'shared/utils/numbers';

const tokensMintedNumber = 5000;
const tokensNumber = 10000;
const tokensMintedPercent = getNumberPercentageBetweenTwoNumbers(
  tokensMintedNumber,
  tokensNumber,
);

export { tokensMintedNumber, tokensNumber, tokensMintedPercent };
