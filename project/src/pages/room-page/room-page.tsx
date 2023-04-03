import LayoutBase from '../../layouts/layout-base/layout-base';
import { useParams, useNavigate } from 'react-router-dom';
import { Offers } from '../../types/offer';
import { AppRoute } from '../../const';
import RoomGallery from '../../components/room/room-gallery/room-gallery';
import { bringFirstCharToUpperCase } from '../../utils/common';
import Rating from '../../components/rating/rating';
import RoomFeatures from '../../components/room/room-features/room-features';
import RoomGoods from '../../components/room/room-goods/room-goods';
import RoomHost from '../../components/room/room-host/room-host';
import { Reviews } from '../../types/review';
import RoomReviews from '../../components/room/room-reviews/room-reviews';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { useState } from 'react';
import { NO_CARD_ID } from '../../const';

type RoomPageProps = {
  offers: Offers;
  reviews: Reviews;
}

export default function RoomPage({offers, reviews}: RoomPageProps) {
  const params = useParams();
  const navigate = useNavigate();
  const idFromParams = Number(params.id);
  const offer = offers.find((offerItem) => offerItem.id === idFromParams);
  if (!offer) {
    navigate(AppRoute.NotFound);
  }

  const [activeOfferId, setActiveOfferId] = useState(NO_CARD_ID);

  return (
    <div>
      {offer &&
      <LayoutBase withBaseHeader pageTitle="room">
        <main className="page__main page__main--property">
          <section className="property">
            <RoomGallery listOfImagesSrc={offer.images}/>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {bringFirstCharToUpperCase(offer.title)}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <Rating rating={offer.rating} className='property__stars'/>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <RoomFeatures
                  offerType={offer.type}
                  bedroomsNumber={offer.bedrooms}
                  maxAdultsNumber={offer.maxAdults}
                />
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <RoomGoods goods={offer.goods}/>
                <RoomHost
                  name={offer.host.name}
                  isPro={offer.host.isPro}
                  avatarUrl={offer.host.avatarUrl}
                  description={offer.description}
                />
                <RoomReviews reviews={reviews}/>
              </div>
            </div>
            <Map
              className='property__map'
              city={offer.city}
              offers={offers}
              selectedOfferId={activeOfferId}
              isWide
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlaceCardList
                  offers={offers}
                  type='nearPlaces'
                  classNamePrefix='near-places'
                  onListItemActive={setActiveOfferId}
                />
              </div>
            </section>
          </div>
        </main>
      </LayoutBase>}
    </div>
  );
}
