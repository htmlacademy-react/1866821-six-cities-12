import { CitiesMap } from 'types/city';
import { SortType } from 'types/sort';

export enum FavoritesChange {
  Remove = 0,
  Add = 1
}

export const REDIRECT_ACTION_NAME = 'app/redirectToRoute';

export enum ServerErrors {
  Auth = 'Authorization internal error, try again later',
  Login = 'Login internal error, try again later',
  Logout = 'Logout internal error, try again later',
  GetOffers = 'Get offers internal error, try again later',
  Comment = 'Comment add internal error, try again later',
  Unauthorized = 'No unauthorized',
  FavoriteOfferAdd = 'Offer not added to favorites, internal error, try again later',
  FavoriteOfferRemove = 'Offer not added to favorites, internal error, try again later'
}

export enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed'
}

export enum NameSpace {
  AppAside = 'APP_ASIDE',
  Offers = 'OFFERS',
  FavoriteOffers = 'FAVORITE_OFFERS',
  User = 'USER',
  Comments = 'COMMENTS'
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  DevRoom = '/offer-dev',
  NotFound = '*',
  Error = '/error'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  OffersNearby = '/nearby',
  Favorites = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export const URL_MARKER_DEFAULT =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjg1NiAxNy45MjlhMTEuNzMzIDExLjczMyAwIDAgMCAxLjIxMy01LjE5NkMyNS4wNyA2LjI1MyAxOS44MTYgMSAxMy4zMzYgMWMtMS44MzUgMC0zLjY0My40NC01LjI3MiAxLjI4NUMyLjQ0NCA1LjE5Ny4yNDggMTIuMTEzIDMuMTYgMTcuNzMzbDkuNzM2IDE4Ljc5MmExIDEgMCAwIDAgMS43ODQtLjAxN2w5LjE3Ni0xOC41OHoiIGZpbGw9IiM0NDgxQzMiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4NCg==';

export const URL_MARKER_CURRENT =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjg1NiAxNy45MjlhMTEuNzMzIDExLjczMyAwIDAgMCAxLjIxMy01LjE5NkMyNS4wNyA2LjI1MyAxOS44MTYgMSAxMy4zMzYgMWMtMS44MzUgMC0zLjY0My40NC01LjI3MiAxLjI4NUMyLjQ0NCA1LjE5Ny4yNDggMTIuMTEzIDMuMTYgMTcuNzMzbDkuNzM2IDE4Ljc5MmExIDEgMCAwIDAgMS43ODQtLjAxN2w5LjE3Ni0xOC41OHoiIGZpbGw9IiNGRjkwMDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4NCg==';

export const NO_CARD_ID = -1;
export const MAX_RATING_NUMBER = 5;
export const MAX_PERCENT_NUMBER = 100;

export const Cities: CitiesMap = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
};

export const SortKinds: SortType = {
  POPULAR: 'Popular',
  PRICE_HIGH: 'Price: low to high',
  PRICE_LOW: 'Price: high to low',
  RATED_FIRST: 'Top rated first'
} as const;

export const SortDirection = {
  UP: 1,
  LOW: -1
};
