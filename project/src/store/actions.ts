import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from 'const';
import { City } from 'types/city';
import { Offers } from 'types/offer';
import { SortType } from 'types/sort';
import { UserData } from 'types/user-data';
import { Error } from 'types/state';

export const changeCity = createAction<{city: City}>('city/set');

export const changeSort = createAction<{sortType: keyof SortType}>('offers/sort');

export const loadOffers = createAction<Offers>('offers/load');

export const setError = createAction<{error: Error | null}>('app/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('app/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<{status: AuthorizationStatus; userData: UserData | null}>('user/requireAuthorization');
