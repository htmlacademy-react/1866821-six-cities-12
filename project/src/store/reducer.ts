import {createReducer} from '@reduxjs/toolkit';
import { Cities, SortKinds } from '../const';
import { mockOffers } from '../mocks/offers';
import {changeCity, changeSort} from './action';

const initialState = {
  city: Cities.Paris,
  offersList: mockOffers,
  sortType: SortKinds.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = SortKinds[action.payload.sortType];
    });
});

export {reducer};
