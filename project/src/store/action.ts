import {createAction} from '@reduxjs/toolkit';
import { City } from 'types/city';
import { SortType } from 'types/sort';

export const changeCity = createAction<{city: City}>('city/set');

export const changeSort = createAction<{sortType: keyof SortType}>('offers/sort');
