import { AuthorizationStatus } from 'const.js';
import {store} from '../store/index.js';
import { City } from './city.js';
import { Offers } from './offer.js';
import { UserData } from './user-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Error = {
  message: string;
  code: number;
}

export type InitState = {
  city: City;
  offersList: Offers;
  sortType: string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  error: Error | null;
};
