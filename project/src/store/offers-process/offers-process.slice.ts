import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { fetchOneOfferAction,
  fetchOffersAction,
  fetchOffersNearByAction,
  fetchFavoriteOffersAction
} from '../api-actions';
import { Offer, Offers } from 'types/offer';

export type OffersProcess = {
  offersList: Offers;
  offersLoadStatus: FetchStatus;
  offer: Offer | null;
  offerLoadStatus: FetchStatus;
}

const initialState: OffersProcess = {
  offersList: [],
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
        state.offersList = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersList = [];
        state.offersLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.offersLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.offersList = [];
        state.offersLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.offersLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.offersList = [];
        state.offersLoadStatus = FetchStatus.Failed;
      });
  }
});
