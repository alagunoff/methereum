import { ColorValues } from 'shared/types/Color';

function getLinearGradient({
  direction,
  startColor,
  startColorToPercent,
  stopColor,
  stopColorFromPercent,
}: {
  direction: 'right';
  startColor: ColorValues;
  startColorToPercent?: number;
  stopColor: ColorValues;
  stopColorFromPercent?: number;
}): string {
  return `linear-gradient(to ${direction}, ${startColor} ${startColorToPercent}%, ${stopColor} ${stopColorFromPercent}%)`;
}

export { getLinearGradient };
