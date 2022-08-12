import { checkIfValueNumber } from 'shared/typeGuards';

function getNumberPercentageBetweenTwoNumbers(
  numberOne?: number,
  numberTwo?: number,
): number | undefined {
  return checkIfValueNumber(numberOne) && checkIfValueNumber(numberTwo)
    ? (numberOne / numberTwo) * 100
    : undefined;
}

export { getNumberPercentageBetweenTwoNumbers };
