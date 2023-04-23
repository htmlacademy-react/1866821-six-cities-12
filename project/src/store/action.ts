import {createAction} from '@reduxjs/toolkit';
import {AppRoute, REDIRECT_ACTION_NAME} from '../const';

export const redirectToRoute = createAction<AppRoute>(REDIRECT_ACTION_NAME);
