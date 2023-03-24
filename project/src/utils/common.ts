import { MAX_RATING_NUMBER, MAX_PERCENT_NUMBER } from '../const';

export const bringFirstCharToUpperCase = (inputString: string): string => {
  if (!inputString) {
    return inputString;
  }
  return inputString[0].toUpperCase() + inputString.slice(1);
};

export const getRatingInPercents = (currentRatingNumber: number): string => `${currentRatingNumber / MAX_RATING_NUMBER * MAX_PERCENT_NUMBER}%`;
