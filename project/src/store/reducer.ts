import {createReducer} from '@reduxjs/toolkit';
import { Cities, SortKinds } from '../const';
import { mockOffers } from '../mocks/offers';
import {setCity, fillOffers, sortOffers} from './action';

const initialState = {
  city: Cities.Paris,
  offersList: mockOffers,
  sortType: SortKinds.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = action.payload.offersList;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = SortKinds[action.payload.sortKind];
    });
});

export {reducer};
