import { FormEventHandler, useState } from 'react';
import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import FeedbackRating from '../feedback-rating/feedback-rating';
import { useAppDispatch, useAppSelector } from '../../../../hooks/base';
import { addCommentAction } from '../../../../store/api-actions';
import styles from './feedback-form.module.css';
import cn from 'classnames';
import { getCommentAddLoadStatus } from '../../../../store/commets-process/commets-process.selectors';
import { useParams } from 'react-router-dom';

const COMMNET_MIN_LENGTH = 50;
const COMMNET_MAX_LENGTH = 300;

type Field = {
  comment: string;
  rating: number;
  error: boolean;
  errorMessage: string;
  touched: boolean;
}

export default function FeedbackForm() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const commentsAddLoadStatus = useAppSelector(getCommentAddLoadStatus);
  const hotelId = Number(params.id);

  const [formData, setFromData] = useState<Field>({
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
    const isError = (formData.comment.length < COMMNET_MIN_LENGTH && formData.comment.length > COMMNET_MAX_LENGTH);

    setFromData({
      ...formData,
      [name]: value,
      error: isError,
    });
  };

  const submitFormHandle: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (formData.error) {
      return;
    }

    dispatch(addCommentAction({
      hotelId,
      comment: formData.comment,
      rating: formData.rating
    }));
    setFromData({
      ...formData,
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
        disabled={commentsAddLoadStatus.isLoading}
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
          disabled={commentsAddLoadStatus.isLoading || formData.error}
        >
          Submit
        </button>
      </div>
      {commentsAddLoadStatus.isError && <span>Ошибка, попробуйте позже, отзыв не добавлен</span>}
    </form>
  );
}
