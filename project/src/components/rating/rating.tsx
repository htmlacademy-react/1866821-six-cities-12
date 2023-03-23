import { getRatingInPercents } from '../../utils/common';
import cn from 'classnames';

type RatingProps = {
  rating: number;
  className: string;
}

export default function Rating({rating, className}: RatingProps) {
  return (
    <div className={cn(className, 'rating__stars')}>
      <span style={{width: getRatingInPercents(rating)}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
