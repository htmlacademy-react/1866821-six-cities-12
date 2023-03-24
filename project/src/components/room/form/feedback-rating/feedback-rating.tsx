import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import FeedbackRatingItem from './feedback-rating-item/feedback-rating-item';

type FeedbackRatingProps = {
  onRatingChange: ChangeEventHandlerCommon;
}

type RatingTitles = {
  [key: number]: string;
}

const titles: RatingTitles = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

export default function FeedbackRating({onRatingChange}: FeedbackRatingProps) {

  return (
    <div className="reviews__rating-form form__rating">
      {Object.keys(titles).map((titleIndex) => (
        <FeedbackRatingItem key={titleIndex} onRatingItemChange={onRatingChange} ratingNumber={titleIndex} title={titles[Number(titleIndex)]}/>
      ))}
    </div>
  );
}
