import { FormEventHandler, useState } from 'react';
import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import FeedbackRating from '../feedback-rating/feedback-rating';
import { useAppDispatch, useAppSelector } from '../../../../hooks/base';
import { addCommentAction } from '../../../../store/api-actions';
import styles from './feedback-form.module.css';
import cn from 'classnames';
import { getCommentAddLoadStatus } from '../../../../store/commets-process/commets-process.selectors';

const COMMNET_MIN_LENGTH = 50;

type FeedbackFormProps = {
  hotelId: number;
}

type Field = {
  hotelId: number;
  comment: string;
  rating: number;
  error: boolean;
  errorMessage: string;
  touched: boolean;
}

export default function FeedbackForm({hotelId}: FeedbackFormProps) {
  const dispatch = useAppDispatch();
  const commentsAddloadStatus = useAppSelector(getCommentAddLoadStatus);

  const [formData, setFromData] = useState<Field>({
    hotelId,
    comment: '',
    rating: 1,
    error: true,
    errorMessage: 'Minimum 50 characters',
    touched: false
  });


  const fieldFocusHandler = () => {
    setFromData({
      ...formData,
      touched: true
    });
  };

  const fieldChangeHandle: ChangeEventHandlerCommon = (evt) => {
    const {name, value} = evt.target;
    const isError = (formData.comment.length < COMMNET_MIN_LENGTH);

    setFromData({
      ...formData,
      hotelId,
      [name]: value,
      error: isError,
    });
  };

  const submitFormHandle: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (formData.error) {
      return;
    }

    dispatch(addCommentAction(formData));
    setFromData({
      ...formData,
      hotelId,
      comment: '',
      rating: 0
    });
  };

  const commentErrorClassName = (formData.error && formData.touched) ? styles.error : '';

  return (
    <form onSubmit={submitFormHandle} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FeedbackRating onRatingChange={fieldChangeHandle} checkedRating={formData.rating}/>
      <textarea
        onFocus={fieldFocusHandler}
        onChange={fieldChangeHandle}
        value={formData.comment}
        className={cn('reviews__textarea', 'form__textarea', commentErrorClassName)}
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={commentsAddloadStatus.isLoading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(commentsAddloadStatus.isLoading || formData.error) || commentsAddloadStatus.isError}
        >
          Submit
        </button>
      </div>
      {commentsAddloadStatus.isError && <span>Ошибка, попробуйте позже, отзыв не добавлен</span>}
    </form>
  );
}
