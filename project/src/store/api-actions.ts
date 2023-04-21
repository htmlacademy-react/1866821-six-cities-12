import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { Offers } from 'types/offer';
import { AppDispatch, State } from 'types/state';
import { UserData } from 'types/user-data';
import { AuthData } from 'types/auth-data';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData | null, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData | null>(APIRoute.Login, {email, password});
    data && saveToken(data.token);
    return data;
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
  },
);

export const checkAuthAction = createAsyncThunk<UserData | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData | null>(APIRoute.Login);
    return data;
  },
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    // setTimeout(
    //   () => store.dispatch(setError({error: null})),
    //   TIMEOUT_SHOW_ERROR,
    // );
  },
);
