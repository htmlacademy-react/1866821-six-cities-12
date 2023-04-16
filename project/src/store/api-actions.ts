import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { Offers } from 'types/offer';
import { AppDispatch, State } from 'types/state';
import { loadOffers, setError, setOffersDataLoadingStatus } from './actions';

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

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
