import { FormEventHandler, useEffect, useState } from 'react';
import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import FeedbackRating from '../feedback-rating/feedback-rating';
import { useAppDispatch, useAppSelector } from '../../../../hooks/base';
import { addCommentAction } from '../../../../store/api-actions';
import cn from 'classnames';
import { getCommentAddLoadStatus } from '../../../../store/commets-process/commets-process.selectors';
import { useParams } from 'react-router-dom';
import { resetCommentsLoadStatus } from '../../../../store/commets-process/commets-process.slice';
import { FeedbackFormLimits, FeedbackFormFieldsNames } from '../../../../const';

type Field = {
  comment: string;
  rating: number;
  error: boolean;
}

export default function FeedbackForm() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const commentAddLoadStatus = useAppSelector(getCommentAddLoadStatus);
  const hotelId = Number(params.id);

  const [formData, setFormData] = useState<Field>({
    comment: '',
    rating: 0,
    error: true,
  });


  const handleChange: ChangeEventHandlerCommon = (evt) => {
    const {name, value} = evt.target;

    let isRatingError = formData.rating === FeedbackFormLimits.MinRating;
    let isMessageError = formData.comment.length < FeedbackFormLimits.CommentMinLength || formData.comment.length > FeedbackFormLimits.CommentMaxLength;

    if (name === FeedbackFormFieldsNames.Rating) {
      isRatingError = Number(value) === FeedbackFormLimits.MinRating;
    }

    if (name === FeedbackFormFieldsNames.Comment) {
      isMessageError = value.length < FeedbackFormLimits.CommentMinLength || value.length > FeedbackFormLimits.CommentMaxLength;
    }

    const isError = (isMessageError || isRatingError);

    setFormData({
      ...formData,
      [name]: value,
      error: isError,
    });
  };

  useEffect(() => {
    if (commentAddLoadStatus.isSuccess) {
      setFormData({
        comment: '',
        rating: 0,
        error: true
      });
      dispatch(resetCommentsLoadStatus);
    }
  }, [commentAddLoadStatus]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (formData.error) {
      return;
    }

    dispatch(addCommentAction({
      hotelId,
      comment: formData.comment,
      rating: formData.rating
    }));

  };

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FeedbackRating onRatingChange={handleChange} checkedRating={formData.rating}/>
      <textarea
        onChange={handleChange}
        value={formData.comment}
        className={cn('reviews__textarea', 'form__textarea')}
        id="review"
        name={FeedbackFormFieldsNames.Comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={commentAddLoadStatus.isLoading}
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
          disabled={commentAddLoadStatus.isLoading || formData.error}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
