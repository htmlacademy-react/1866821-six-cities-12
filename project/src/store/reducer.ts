import {createReducer} from '@reduxjs/toolkit';
import { InitState } from 'types/state';
import { Cities, SortKinds } from '../const';
import {changeCity, changeSort, loadOffers, setError, setOffersDataLoadingStatus} from './actions';

const initialState: InitState = {
  city: Cities.Paris,
  offersList: [],
  sortType: SortKinds.POPULAR,
  isOffersDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = SortKinds[action.payload.sortType];
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
