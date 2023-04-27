import cn from 'classnames';
import LayoutBase from '../../layouts/layout-base/layout-base';
import { useParams } from 'react-router-dom';
import RoomGallery from '../../components/room/room-gallery/room-gallery';
import { bringFirstCharToUpperCase } from '../../utils/common';
import Rating from '../../components/rating/rating';
import RoomFeatures from '../../components/room/room-features/room-features';
import RoomGoods from '../../components/room/room-goods/room-goods';
import RoomHost from '../../components/room/room-host/room-host';
import RoomReviews from '../../components/room/room-reviews/room-reviews';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/base';
import { fetchCommentsAction, fetchOneOfferAction, fetchOffersNearByAction, toggleFavoriteOfferAction} from '../../store/api-actions';
import { getOneOffer, getOneOfferLoadStatus, getOffers, getOffersLoadStatus } from '../../store/offers-process/offers-process.selectors';
import { getComments, getCommentsLoadStatus } from '../../store/commets-process/commets-process.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Spinner from '../../components/spinners/spinner/spinner';
import ErrorFullScreen from '../../components/error-fullscreen/error-fullscreen';

const OFFERS_LIST_LIMIT = 3;

export default function RoomPage() {
  const params = useParams();
  const hotelId = Number(params.id);

  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOneOffer);
  const offerLoadStatus = useAppSelector(getOneOfferLoadStatus);

  const offersNearBy = useAppSelector(getOffers);
  const offersNearByLoadStatus = useAppSelector(getOffersLoadStatus);

  const reviews = useAppSelector(getComments);
  const revewsSortedNewToOld = [...reviews].reverse();
  const reviewsLoadStatus = useAppSelector(getCommentsLoadStatus);

  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchOneOfferAction(hotelId));
    dispatch(fetchCommentsAction(hotelId));
    dispatch(fetchOffersNearByAction({offerId: hotelId}));
  }, [dispatch, hotelId]);


  if (offerLoadStatus.isError) {
    return <ErrorFullScreen />;
  }

  if (offerLoadStatus.isLoading || !offer) {
    return <Spinner fullHeight />;
  }

  return (
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
                <button
                  className={cn('property__bookmark-button', 'button', {'property__bookmark-button--active' : offer.isFavorite})}
                  type="button"
                  onClick={() => {dispatch(toggleFavoriteOfferAction({id: offer.id, isFavorite: !offer.isFavorite}));}}
                >
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
              {reviewsLoadStatus.isLoading && <Spinner />}
              {reviewsLoadStatus.isSuccess && <RoomReviews reviews={revewsSortedNewToOld} isAuthorized={authStatus.auth}/>}
            </div>
          </div>
          <Map
            className='property__map'
            city={offer.city}
            offers={[...offersNearBy, offer]}
            selectedOfferId={offer.id}
            isWide
          />
        </section>
        <div className="container">
          {offersNearByLoadStatus.isLoading && <Spinner />}
          {offersNearByLoadStatus.isSuccess &&
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardList
                localOffers={offersNearBy.slice(0, OFFERS_LIST_LIMIT)}
                type='nearPlaces'
                classNamePrefix='near-places'
              />
            </div>
          </section>}
        </div>
      </main>
    </LayoutBase>
  );
}
