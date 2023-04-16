import {createReducer} from '@reduxjs/toolkit';
import { InitState } from 'types/state';
import { Cities, SortKinds } from '../const';
import {changeCity, changeSort, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus} from './actions';
import { AuthorizationStatus } from '../const';

const initialState: InitState = {
  city: Cities.Paris,
  offersList: [],
  sortType: SortKinds.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userData: null,
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
      state.error = action.payload.error;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.status;
      state.userData = action.payload.userData;
    });
});

export {reducer};
