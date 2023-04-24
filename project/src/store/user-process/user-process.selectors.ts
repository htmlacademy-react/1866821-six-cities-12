import { UserData } from 'types/user-data';
import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getAuthorizationStatusClear = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;

export const getAuthorizationStatus = createSelector([getAuthorizationStatusClear], (status) => ({
  auth: status === AuthorizationStatus.Auth,
  noAuth: status === AuthorizationStatus.NoAuth,
  unknown: status === AuthorizationStatus.Unknown
}));
