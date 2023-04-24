import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';
import { Reviews } from 'types/review';

export const getComments = (state: State): Reviews => state[NameSpace.Comments].comments;
export const getCommentsStatus = (state: State): FetchStatus => state[NameSpace.Comments].commentsLoadStatus;
export const getCommentsLoadStatus = createSelector([getCommentsStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));

export const getCommentAddStatus = (state: State): FetchStatus => state[NameSpace.Comments].commentAddStatus;
export const getCommentAddLoadStatus = createSelector([getCommentAddStatus], (status) => ({
  isLoading: FetchStatus.Loading === status,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));


