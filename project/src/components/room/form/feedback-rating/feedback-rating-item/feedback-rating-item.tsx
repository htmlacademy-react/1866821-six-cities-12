import { ChangeEventHandlerCommon } from '../../../../../types/handlers';

type FeedbackRatingItemProps = {
  onRatingItemChange: ChangeEventHandlerCommon;
  ratingNumber: 1 | 2 | 3 | 4 | 5;
}

const titles = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

export default function FeedbackRatingItem({onRatingItemChange, ratingNumber}: FeedbackRatingItemProps) {
  const title = titles[ratingNumber];
  return (
    <>
      <input onChange={onRatingItemChange} className="form__rating-input visually-hidden" name="rating" value={ratingNumber} id={`${ratingNumber}-stars`} type="radio" />
      <label htmlFor={`${ratingNumber}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
