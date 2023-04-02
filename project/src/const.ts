export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  DevRoom = '/offer-dev',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES_CLASS_PREFIX = 'cities';
export const FAVORITES_CLASS_PREFIX = 'favorites';

export const NO_CARD_ID = -1;
export const MAX_RATING_NUMBER = 5;
export const MAX_PERCENT_NUMBER = 100;
