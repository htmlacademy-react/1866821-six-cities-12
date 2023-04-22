import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus, FetchStatus} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import { UserData } from 'types/user-data';


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  authorizationLoadStatus: FetchStatus;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  authorizationLoadStatus: FetchStatus.Idle,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    resetAuthLoadStatus: (state) => {
      state.authorizationLoadStatus = FetchStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationLoadStatus = FetchStatus.Loading;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.authorizationLoadStatus = FetchStatus.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authorizationLoadStatus = FetchStatus.Failed;
      })

      .addCase(loginAction.pending, (state) => {
        state.authorizationLoadStatus = FetchStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.authorizationLoadStatus = FetchStatus.Success;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authorizationLoadStatus = FetchStatus.Failed;
      })
      .addCase(logoutAction.pending, (state) => {
        state.authorizationLoadStatus = FetchStatus.Loading;
      })

      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authorizationLoadStatus = FetchStatus.Success;
        state.userData = null;
      });
  }
});

export const { resetAuthLoadStatus } = userProcess.actions;
