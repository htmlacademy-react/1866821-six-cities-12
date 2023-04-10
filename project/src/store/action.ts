import {createAction} from '@reduxjs/toolkit';
import { City } from 'types/city';
import { Offers } from 'types/offer';

export const setCity = createAction<{city: City}>('city/set');

export const fillOffers = createAction<{offersList: Offers}>('offers/fill');

export const setOffersByCity = createAction<{city: City; offersList: Offers}>('offers/set');
