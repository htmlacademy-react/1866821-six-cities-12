import { Reviews } from '../../../types/review';
import FeedbackForm from '../form/feedback-form/feedback-form';
import ReviewsList from '../reviews-list/reviews-list';

type RoomReviewsProps = {
  reviews: Reviews;
}

export default function RoomReviews({reviews}: RoomReviewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      <FeedbackForm reviews={reviews}/>
    </section>
  );
}
