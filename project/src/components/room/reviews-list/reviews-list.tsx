import { Reviews } from '../../../types/review';
import ReviewsItem from '../review/review-item';

type ReviewsListProps = {
  reviews: Reviews;
}

export default function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
