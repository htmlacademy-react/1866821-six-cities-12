import { Reviews } from '../../../types/review';
import { bringFirstCharToUpperCase } from '../../../utils/common';
import Avatar from '../avatar/avatar';
import Rating from '../../rating/rating';
import { bringToSimpleDate, bringToViewDate } from '../../../utils/date';

type ReviewsListProps = {
  reviews: Reviews;
}

export default function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <Avatar avatarUrl={review.user.avatarUrl} type='reviews' classNamePrefix='reviews'/>
            <span className="reviews__user-name">
              {bringFirstCharToUpperCase(review.user.name)}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <Rating rating={review.rating} className='reviews__stars'/>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime={bringToSimpleDate(review.date)}>{bringToViewDate(review.date)}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
