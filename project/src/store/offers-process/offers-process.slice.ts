import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { fetchOfferAction, fetchOffersAction } from '../api-actions';
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
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
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
      });
  }
});
