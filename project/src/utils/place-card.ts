import { MAX_RATING_NUMBER, MAX_PERCENT_NUMBER } from '../const';

export const getRatingInPercents = (currentRatingNumber: number): string => `${currentRatingNumber / MAX_RATING_NUMBER * MAX_PERCENT_NUMBER}%`;
