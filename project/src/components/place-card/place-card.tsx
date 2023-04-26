import cn from 'classnames';
import { Offer, OffersList } from '../../types/offer';
import { bringFirstCharToUpperCase } from '../../utils/common';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import { useAppDispatch } from '../../hooks/base';
import { toggleFavoriteOfferAction } from '../../store/api-actions';

type PlaceCardProps = {
  classNamePrefix: string;
  offer: Offer;
  onCardActive?: (cardId: number) => void;
  type: OffersList;
}

const imageSizes = {
  favorites: {
    width: 150,
    height: 110
  },
  nearPlaces: {
    width: 260,
    height: 200
  },
  cities: {
    width: 260,
    height: 200
  }
};

export default function PlaceCard({
  classNamePrefix,
  offer,
  onCardActive,
  type}: PlaceCardProps) {
  const dispatch = useAppDispatch();
  const size = imageSizes[type];

  return (
    <article className={`${classNamePrefix}__card place-card`} onMouseOver={() => onCardActive && onCardActive(offer.id)}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={size.width} height={size.height} alt="Place" />
        </Link>
      </div>
      <div className={`${classNamePrefix}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active' : offer.isFavorite})}
            type="button"
            onClick={() => {dispatch(toggleFavoriteOfferAction({id: offer.id, isFavorite: !offer.isFavorite}));}}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <Rating rating={offer.rating} className='place-card__stars'/>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{bringFirstCharToUpperCase(offer.title)}</Link>
        </h2>
        <p className="place-card__type">{bringFirstCharToUpperCase(offer.type)}</p>
      </div>
    </article>
  );
}
