import { UserData } from 'types/user-data';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationFetchStatus = (state: State): FetchStatus => state[NameSpace.User].authorizationLoadStatus;
export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;

export const getAuthorizationLoadStatus = createSelector([getAuthorizationFetchStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));