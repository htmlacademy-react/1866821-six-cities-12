import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { offersProcess } from './offers-process/offers-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { asideProcess } from './app-aside-process/app-aside-process.slice';
import { commentsProcess } from './commets-process/commets-process.slice';
import { favoriteOffersProcess } from './favorite-offers-process/favorite-offers-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.AppAside]: asideProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer
});
