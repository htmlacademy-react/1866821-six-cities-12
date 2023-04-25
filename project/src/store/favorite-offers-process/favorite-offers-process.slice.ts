import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import {
  fetchFavoriteOffersAction,
  addFavoriteOfferAction,
  removeFavoriteOfferAction,
  logoutAction
} from '../api-actions';
import { Offers } from 'types/offer';
import { offerInOffers, removeOfferFromOffers } from '../../utils/offers';

export type FavoriteOffersProcess = {
  favoriteOffers: Offers;
  favoriteOffersStatus: FetchStatus;
}

const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
  favoriteOffersStatus: FetchStatus.Idle,
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.favoriteOffersStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteOffersStatus = FetchStatus.Success;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.favoriteOffers = [];
        state.favoriteOffersStatus = FetchStatus.Failed;
      })

      .addCase(addFavoriteOfferAction.fulfilled, (state, action) => {
        if (action.payload.offer.isFavorite && !offerInOffers(action.payload.favoriteOffers, action.payload.offer)) {
          state.favoriteOffers = [...action.payload.favoriteOffers, action.payload.offer];
        }
        state.favoriteOffersStatus = FetchStatus.Success;
      })
      .addCase(addFavoriteOfferAction.pending, (state) => {
        state.favoriteOffersStatus = FetchStatus.Loading;
      })
      .addCase(addFavoriteOfferAction.rejected, (state) => {
        state.favoriteOffersStatus = FetchStatus.Failed;
      })

      .addCase(removeFavoriteOfferAction.fulfilled, (state, action) => {
        if (!action.payload.offer.isFavorite && offerInOffers(action.payload.favoriteOffers, action.payload.offer)) {
          state.favoriteOffers = removeOfferFromOffers(action.payload.favoriteOffers, action.payload.offer);
        }
        state.favoriteOffersStatus = FetchStatus.Success;
      })
      .addCase(removeFavoriteOfferAction.pending, (state) => {
        state.favoriteOffersStatus = FetchStatus.Loading;
      })
      .addCase(removeFavoriteOfferAction.rejected, (state) => {
        state.favoriteOffersStatus = FetchStatus.Failed;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteOffers = [];
        state.favoriteOffersStatus = FetchStatus.Idle;
      });
  }
});
