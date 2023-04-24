import { ChangeEventHandlerCommon } from '../../../../types/handlers';
import FeedbackRatingItem from './feedback-rating-item/feedback-rating-item';

type FeedbackRatingProps = {
  onRatingChange: ChangeEventHandlerCommon;
  checkedRating: number;
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

export default function FeedbackRating({onRatingChange, checkedRating}: FeedbackRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.keys(titles).reverse().map((titleIndex) => (
        <FeedbackRatingItem
          key={titleIndex}
          onRatingItemChange={onRatingChange}
          ratingNumber={Number(titleIndex)}
          title={titles[Number(titleIndex)]}
          checked={Number(titleIndex) === Number(checkedRating)}
        />
      ))}
    </div>
  );
}
