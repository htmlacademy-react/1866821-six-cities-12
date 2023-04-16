import { Review } from '../../../types/review';
import { bringFirstCharToUpperCase } from '../../../utils/common';
import Avatar from '../../avatar/avatar';
import Rating from '../../rating/rating';
import { bringToSimpleDate, bringToViewDate } from '../../../utils/date';

type ReviewsItemProps = {
  review: Review;
}

export default function ReviewsItem({review}: ReviewsItemProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <Avatar avatarUrl={review.user.avatarUrl} type="reviews" classNamePrefix="reviews"/>
        <span className="reviews__user-name">
          {bringFirstCharToUpperCase(review.user.name)}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <Rating rating={review.rating} className="reviews__stars"/>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={bringToSimpleDate(review.date)}>{bringToViewDate(review.date)}</time>
      </div>
    </li>

  );
}
