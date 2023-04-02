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
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjg1NiAxNy45MjlhMTEuNzMzIDExLjczMyAwIDAgMCAxLjIxMy01LjE5NkMyNS4wNyA2LjI1MyAxOS44MTYgMSAxMy4zMzYgMWMtMS44MzUgMC0zLjY0My40NC01LjI3MiAxLjI4NUMyLjQ0NCA1LjE5Ny4yNDggMTIuMTEzIDMuMTYgMTcuNzMzbDkuNzM2IDE4Ljc5MmExIDEgMCAwIDAgMS43ODQtLjAxN2w5LjE3Ni0xOC41OHoiIGZpbGw9IiMzODM4MzgiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4NCg==';

export const URL_MARKER_CURRENT =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjg1NiAxNy45MjlhMTEuNzMzIDExLjczMyAwIDAgMCAxLjIxMy01LjE5NkMyNS4wNyA2LjI1MyAxOS44MTYgMSAxMy4zMzYgMWMtMS44MzUgMC0zLjY0My40NC01LjI3MiAxLjI4NUMyLjQ0NCA1LjE5Ny4yNDggMTIuMTEzIDMuMTYgMTcuNzMzbDkuNzM2IDE4Ljc5MmExIDEgMCAwIDAgMS43ODQtLjAxN2w5LjE3Ni0xOC41OHoiIGZpbGw9IiM0NDgxQzMiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4NCg==';

export const CITIES_CLASS_PREFIX = 'cities';
export const FAVORITES_CLASS_PREFIX = 'favorites';

export const NO_CARD_ID = -1;
export const MAX_RATING_NUMBER = 5;
export const MAX_PERCENT_NUMBER = 100;
