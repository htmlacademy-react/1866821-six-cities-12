import { FormEventHandler, useState } from 'react';
import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import { Reviews } from '../../../../types/review';
import FeedbackRating from '../feedback-rating/feedback-rating';
import { ReviewData } from 'types/review-data';

type FeedbackFormProps = {
  reviews: Reviews;
  hotelId?: number;
}

export default function FeedbackForm({reviews, hotelId = 1}: FeedbackFormProps) {
  const [formData, setFromData] = useState<ReviewData>({
    hotelId,
    review: '',
    rating: 0
  });

  const fieldChangeHandle: ChangeEventHandlerCommon = (evt) => {
    const {name, value} = evt.target;
    setFromData({...formData, [name]: value});
  };

  const submitFormHandle: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    console.log(formData)
  };


  return (
    <form onSubmit={submitFormHandle} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FeedbackRating onRatingChange={fieldChangeHandle}/>
      <textarea
        onChange={fieldChangeHandle}
        value={formData.review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}
