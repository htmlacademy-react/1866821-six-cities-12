import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { Offers } from 'types/offer';
import { AppDispatch, State } from 'types/state';
import { loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './actions';
import { UserData } from 'types/user-data';
import { AuthData } from 'types/auth-data';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});

    saveToken(data.token);
    dispatch(requireAuthorization({status: AuthorizationStatus.Auth, userData: {
      id: data.id,
      email: data.email,
      token: data.token,
      avatarUrl: data.avatarUrl,
      favoritesNumber: 3
    }}));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization({status: AuthorizationStatus.NoAuth, userData: null}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization({status: AuthorizationStatus.Auth, userData: {
        id: data.id,
        email: data.email,
        token: data.token,
        avatarUrl: data.avatarUrl,
        favoritesNumber: 3
      }}));
    } catch {
      dispatch(requireAuthorization({status: AuthorizationStatus.NoAuth, userData: null}));
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError({error: null})),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
