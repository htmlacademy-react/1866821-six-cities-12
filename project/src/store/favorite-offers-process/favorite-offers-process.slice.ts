import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import {
  fetchFavoriteOffersAction,
  toggleFavoriteOfferAction
} from '../api-actions';
import { Offers } from 'types/offer';

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

      .addCase(toggleFavoriteOfferAction.fulfilled, (state, action) => {
        state.favoriteOffersStatus = FetchStatus.Success;
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(toggleFavoriteOfferAction.pending, (state) => {
        state.favoriteOffersStatus = FetchStatus.Loading;
      })
      .addCase(toggleFavoriteOfferAction.rejected, (state) => {
        state.favoriteOffersStatus = FetchStatus.Failed;
      });
  }
});
