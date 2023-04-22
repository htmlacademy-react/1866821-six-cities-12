import { Offer, Offers } from 'types/offer';
import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';
import { Reviews } from 'types/review';

export const getOffer = (state: State): Offer | null => state[NameSpace.Room].offer;
export const getOfferStatus = (state: State): FetchStatus => state[NameSpace.Room].offerLoadStatus;
export const getOfferLoadStatus = createSelector([getOfferStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));


export const getComments = (state: State): Reviews => state[NameSpace.Room].comments;
export const getCommentsStatus = (state: State): FetchStatus => state[NameSpace.Room].commentsLoadStatus;
export const getCommentsLoadStatus = createSelector([getCommentsStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));


export const getOffersNearBy = (state: State): Offers => state[NameSpace.Room].offersNearBy;
export const getOffersNearStatus = (state: State): FetchStatus => state[NameSpace.Room].offersNearByLoadStatus;
export const getOffersNearLoadStatus = createSelector([getOffersNearStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
