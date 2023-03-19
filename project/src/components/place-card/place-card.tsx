import { CITIES_CLASS_PREFIX } from '../../const';
import { Offer } from '../../types/offer';
import { getRatingInPercents } from '../../utils/place-card';
import { bringFirstCharToUpperCase } from '../../utils/common';

type PlaceCardProps = {
  classNamePrefix?: string;
  offer: Offer;
  onCardActive: (cardId: number) => void;
}

export default function PlaceCard({classNamePrefix = CITIES_CLASS_PREFIX, offer, onCardActive}: PlaceCardProps) {
  return (
    <article className={`${classNamePrefix}__card place-card`} onMouseOver={() => onCardActive(offer.id)}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#/">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className={`${classNamePrefix}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercents(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#/">{bringFirstCharToUpperCase(offer.title)}</a>
        </h2>
        <p className="place-card__type">{bringFirstCharToUpperCase(offer.type)}</p>
      </div>
    </article>
  );
}
