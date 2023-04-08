import {createReducer} from '@reduxjs/toolkit';
import { Cities } from '../const';
import { mockOffers } from '../mocks/offers';
import {setCity, fillOffers} from './action';

const initialState = {
  city: Cities.Paris,
  offersList: mockOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = action.payload.offersList;
    });
});

export {reducer};
