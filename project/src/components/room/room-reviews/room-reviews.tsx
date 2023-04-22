import { Reviews } from '../../../types/review';
import FeedbackForm from '../form/feedback-form/feedback-form';
import ReviewsList from '../reviews-list/reviews-list';
import { getHotelId } from '../../../store/aside-process/aside-process.selectors';
import { useAppSelector } from '../../../hooks/base';

type RoomReviewsProps = {
  reviews: Reviews;
  isAuthorized: boolean;
}

export default function RoomReviews({reviews, isAuthorized}: RoomReviewsProps) {
  const hotelId = useAppSelector(getHotelId);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {hotelId && isAuthorized &&
      <FeedbackForm hotelId={hotelId}/>}
    </section>
  );
}
