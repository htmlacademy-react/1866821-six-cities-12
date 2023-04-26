import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute, AppRoute, FavoritesChange, ServerErrors } from '../const';
import { Offers, Offer } from 'types/offer';
import { AppDispatch, State } from 'types/state';
import { UserData } from 'types/user-data';
import { AuthData } from 'types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { Reviews } from 'types/review';
import { ReviewData } from 'types/review-data';
import { OffersData } from 'types/offers-data';
import { toast } from 'react-toastify';
import { redirectToRoute } from './action';
import {StatusCodes} from 'http-status-codes';

export const addCommentAction = createAsyncThunk<Reviews, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/addComment',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Reviews>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        toast.warn(ServerErrors.Comment);
      }
      throw new Error();
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

export const toggleFavoriteOfferAction = createAsyncThunk<Offer, {id: number; isFavorite: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/toggleFavorite',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    const status = isFavorite ? FavoritesChange.Add : FavoritesChange.Remove;

    try {
      const {data} = await api.post<Offer>(`${APIRoute.Favorites}/${id}/${status}`);
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        toast.warn(ServerErrors.FavoriteOfferAdd);
      }
      if (err instanceof AxiosError && err.response?.status === StatusCodes.UNAUTHORIZED) {
        toast.warn(ServerErrors.Unauthorized);
      }
      throw new Error();
    }
  },
);


export const fetchOneOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
      throw new Error();
    }
  },
);

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        dispatch(redirectToRoute(AppRoute.Error));
      }
      throw new Error();
    }
  },
);

export const fetchOffersNearByAction = createAsyncThunk<Offers, OffersData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffersNearBy',
  async (dataOffers, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${dataOffers.offerId}${APIRoute.OffersNearby}`);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Favorites}`);
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.UNAUTHORIZED) {
        toast.warn(ServerErrors.Unauthorized);
      }
      throw new Error();
    }
  },
);


export const loginAction = createAsyncThunk<UserData | null, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(fetchFavoriteOffersAction());
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        toast.warn(ServerErrors.Login);
      }
      throw new Error();
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dispatch(fetchFavoriteOffersAction());
      dropToken();
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        toast.warn(ServerErrors.Logout);
      }
    }
  },
);

export const checkAuthAction = createAsyncThunk<UserData | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData | null>(APIRoute.Login);
      dispatch(fetchFavoriteOffersAction());
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === StatusCodes.NOT_FOUND) {
        toast.warn(ServerErrors.Auth);
      }
      throw new Error();
    }
  },
);
