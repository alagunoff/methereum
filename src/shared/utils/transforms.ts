import { CurrenciesCodes } from 'ethereum';
import { checkIfValueNumber } from 'shared/typeGuards';

function transformCurrencyToDisplayedCurrency(
  currency?: number,
  currencyUsdCost?: string,
): string {
  if (checkIfValueNumber(currency)) {
    const normalizedCurrency = `${currency.toFixed(4)}${CurrenciesCodes.ether}`;

    return currencyUsdCost
      ? `${normalizedCurrency} ($${Math.round(
          currency * Number(currencyUsdCost),
        )})`
      : normalizedCurrency;
  }

  return '-';
}

export { transformCurrencyToDisplayedCurrency };
