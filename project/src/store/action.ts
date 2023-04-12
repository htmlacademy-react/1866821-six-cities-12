import {createAction} from '@reduxjs/toolkit';
import { City } from 'types/city';
import { Offers } from 'types/offer';
import { SortType } from 'types/sort';

export const setCity = createAction<{city: City}>('city/set');

export const fillOffers = createAction<{offersList: Offers}>('offers/fill');

export const sortOffers = createAction<{sortKind: keyof SortType}>('offers/sort');
