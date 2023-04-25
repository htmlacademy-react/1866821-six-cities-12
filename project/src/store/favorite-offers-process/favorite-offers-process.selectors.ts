import { Offers } from 'types/offer';
import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.FavoriteOffers].favoriteOffers;
export const getFavoriteOffersStatus = (state: State): FetchStatus => state[NameSpace.FavoriteOffers].favoriteOffersStatus;
export const getFavoriteOffersLoadStatus = createSelector([getFavoriteOffersStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));

