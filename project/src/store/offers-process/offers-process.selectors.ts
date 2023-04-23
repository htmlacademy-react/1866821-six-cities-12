import { Offer, Offers } from 'types/offer';
import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getOneOffer = (state: State): Offer => state[NameSpace.Offers].offer;
export const getOneOfferStatus = (state: State): FetchStatus => state[NameSpace.Offers].offerLoadStatus;
export const getOneOfferLoadStatus = createSelector([getOneOfferStatus], (status) => ({
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
