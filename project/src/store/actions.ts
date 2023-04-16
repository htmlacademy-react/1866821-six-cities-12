import {createAction} from '@reduxjs/toolkit';
import { City } from 'types/city';
import { Offers } from 'types/offer';
import { SortType } from 'types/sort';

export const changeCity = createAction<{city: City}>('city/set');

export const changeSort = createAction<{sortType: keyof SortType}>('offers/sort');

export const loadOffers = createAction<Offers>('offers/load');

export const setError = createAction<string | null>('app/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('app/setQuestionsDataLoadingStatus');
