import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { fetchOneOfferAction,
  fetchOffersAction,
  fetchOffersNearByAction,
  toggleFavoriteOfferAction
} from '../api-actions';
import { Offer, Offers } from 'types/offer';

export type OffersProcess = {
  offers: Offers;
  offersLoadStatus: FetchStatus;
  offer: Offer | null;
  offerLoadStatus: FetchStatus;
}

const initialState: OffersProcess = {
  offers: [],
  offersLoadStatus: FetchStatus.Idle,
  offer: null,
  offerLoadStatus: FetchStatus.Idle,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOneOfferAction.pending, (state) => {
        state.offerLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOneOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOneOfferAction.rejected, (state) => {
        state.offerLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchOffersAction.pending, (state) => {
        state.offersLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.offersLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.offersLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.offers = [];
        state.offersLoadStatus = FetchStatus.Failed;
      })

      .addCase(toggleFavoriteOfferAction.fulfilled, (state, action) => {
        state.offers.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });

        if(state.offer && state.offer.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});
