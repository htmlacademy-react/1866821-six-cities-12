import { Offer, Offers } from 'types/offer';
import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offers].offer;
export const getOfferStatus = (state: State): FetchStatus => state[NameSpace.Offers].offerLoadStatus;
export const getOfferLoadStatus = createSelector([getOfferStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offersList;
export const getOffersStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersLoadStatus;
export const getOffersLoadStatus = createSelector([getOffersStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
