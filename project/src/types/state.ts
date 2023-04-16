import {store} from '../store/index.js';
import { City } from './city.js';
import { Offers } from './offer.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitState = {
  city: City;
  offersList: Offers;
  sortType: string;
  isOffersDataLoading: boolean;
  error: string | null;
};
