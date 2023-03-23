import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import FeedbackRatingItem from './feedback-rating-item/feedback-rating-item';

type FeedbackRatingProps = {
  onRatingChange: ChangeEventHandlerCommon;
}

export default function FeedbackRating({onRatingChange}: FeedbackRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      <FeedbackRatingItem onRatingItemChange={onRatingChange} ratingNumber={5}/>
      <FeedbackRatingItem onRatingItemChange={onRatingChange} ratingNumber={4}/>
      <FeedbackRatingItem onRatingItemChange={onRatingChange} ratingNumber={3}/>
      <FeedbackRatingItem onRatingItemChange={onRatingChange} ratingNumber={2}/>
      <FeedbackRatingItem onRatingItemChange={onRatingChange} ratingNumber={1}/>
    </div>
  );
}
