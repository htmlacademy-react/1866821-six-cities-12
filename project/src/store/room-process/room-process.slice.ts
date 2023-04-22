import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Offer, Offers } from 'types/offer';
import { Reviews } from 'types/review';
import { fetchCommentsAction, fetchOfferAction, fetchOffersNearAction } from '../../store/api-actions';

export type RoomProcess = {
  offer: Offer | null;
  offerLoadStatus: FetchStatus;
  offersNearBy: Offers;
  offersNearByLoadStatus: FetchStatus;
  comments: Reviews;
  commentsLoadStatus: FetchStatus;
}

const initialState: RoomProcess = {
  offer: null,
  offerLoadStatus: FetchStatus.Idle,
  offersNearBy: [],
  offersNearByLoadStatus: FetchStatus.Idle,
  comments: [],
  commentsLoadStatus: FetchStatus.Idle
};

export const roomProcess = createSlice({
  name: NameSpace.Room,
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

      .addCase(fetchCommentsAction.pending, (state) => {
        state.commentsLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.commentsLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchOffersNearAction.pending, (state) => {
        state.offersNearByLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersNearAction.fulfilled, (state, action) => {
        state.offersNearBy = action.payload;
        state.offersNearByLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersNearAction.rejected, (state) => {
        state.offersNearByLoadStatus = FetchStatus.Failed;
      });
  }
});
