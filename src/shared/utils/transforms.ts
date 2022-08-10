import { CurrenciesCodes } from 'ethereum';
import { checkIfValueNumber } from 'shared/typeGuards';

function transformCurrencyToDisplayedCurrency(
  currency?: number,
  currencyUsdCost?: string,
) {
  if (checkIfValueNumber(currency)) {
    const normalizedCurrency = `${currency.toFixed(4)}${CurrenciesCodes.ether}`;

    return currencyUsdCost
      ? `${normalizedCurrency} ($${(
          currency * Number(currencyUsdCost)
        ).toFixed()})`
      : normalizedCurrency;
  }

  return '-';
}

export { transformCurrencyToDisplayedCurrency };
