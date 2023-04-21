import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { offersProcess } from './offers-process/offers-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { asideProcess } from './aside-process/aside-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Aside]: asideProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});
