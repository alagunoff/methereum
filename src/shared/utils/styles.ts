import { ColorValues } from 'shared/types/Color';

interface IParameters {
  direction: 'right';
  startColor: ColorValues;
  startColorToPercent?: number;
  stopColor: ColorValues;
  stopColorFromPercent?: number;
}

function getLinearGradient({
  direction,
  startColor,
  startColorToPercent,
  stopColor,
  stopColorFromPercent,
}: IParameters): string {
  return `linear-gradient(to ${direction}, ${startColor} ${startColorToPercent}%, ${stopColor} ${stopColorFromPercent}%)`;
}

export { getLinearGradient };
