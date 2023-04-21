import { Offers } from 'types/offer';
import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offersList;
export const getOffersStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersLoadStatus;

export const getOffersLoadStatus = createSelector([getOffersStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
