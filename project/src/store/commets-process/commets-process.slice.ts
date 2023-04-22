import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Reviews } from 'types/review';
import { fetchCommentsAction, addCommentAction } from '../../store/api-actions';

export type CommentsProcess = {
  comments: Reviews;
  commentAddStatus: FetchStatus;
  commentsLoadStatus: FetchStatus;
}

const initialState: CommentsProcess = {
  comments: [],
  commentAddStatus: FetchStatus.Idle,
  commentsLoadStatus: FetchStatus.Idle
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addCommentAction.pending, (state) => {
        state.commentAddStatus = FetchStatus.Loading;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.commentAddStatus = FetchStatus.Success;
        state.comments = action.payload;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.commentAddStatus = FetchStatus.Failed;
      })

      .addCase(fetchCommentsAction.pending, (state) => {
        state.commentsLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.commentsLoadStatus = FetchStatus.Failed;
      });
  }
});
