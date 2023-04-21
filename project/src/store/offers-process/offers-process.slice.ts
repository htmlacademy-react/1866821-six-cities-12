import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { fetchOffersAction } from '../api-actions';
import { Offers } from 'types/offer';

export type OffersProcess = {
  offersList: Offers;
  offersLoadStatus: FetchStatus;
}

const initialState: OffersProcess = {
  offersList: [],
  offersLoadStatus: FetchStatus.Idle,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
