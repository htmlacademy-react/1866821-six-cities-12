import { ChangeEventHandlerCommon } from '../../../../../types/handlers';

type FeedbackRatingItemProps = {
  onRatingItemChange: ChangeEventHandlerCommon;
  ratingNumber: number;
  title: string;
  checked: boolean;
}

export default function FeedbackRatingItem({onRatingItemChange, ratingNumber, title, checked}: FeedbackRatingItemProps) {

  return (
    <>
      <input
        onChange={onRatingItemChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingNumber}
        id={`${ratingNumber}-stars`}
        type="radio"
        checked={checked}
      />
      <label
        htmlFor={`${ratingNumber}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
