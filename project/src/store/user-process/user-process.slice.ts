import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus } from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {UserData} from 'types/user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.authorizationStatus = AuthorizationStatus.Auth;
          state.userData = action.payload;
        } else {
          state.authorizationStatus = AuthorizationStatus.NoAuth;
        }
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })

      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })

      .addCase(logoutAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  }
});
