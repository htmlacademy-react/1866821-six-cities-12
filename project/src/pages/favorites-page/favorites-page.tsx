import cn from 'classnames';
import LayoutBase from '../../layouts/layout-base/layout-base';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { OffersByCity } from '../../types/offer';
import { groupOffers } from '../../utils/offers';
import { useAppDispatch, useAppSelector } from '../../hooks/base';
import { useEffect } from 'react';
import { getOffers, getOffersLoadStatus } from '../../store/offers-process/offers-process.selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import ErrorFullScreen from '../../components/error-fullscreen/error-fullscreen';
import Spinner from '../../components/spinners/spinner/spinner';

export default function FavoritesPage() {
  const favoriteOffers = useAppSelector(getOffers);
  const favoriteLoadStatus = useAppSelector(getOffersLoadStatus);
  const dispatch = useAppDispatch();
  const favoriteOffersByCity: OffersByCity = groupOffers(favoriteOffers);
  const favoritesIsEmpty = (favoriteOffers.length === 0);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);


  if (favoriteLoadStatus.isError) {
    return <ErrorFullScreen />;
  }

  if (favoriteLoadStatus.isLoading) {
    return <Spinner fullHeight />;
  }

  return (
    <LayoutBase
      withBaseHeader
      withBaseFooter
      pageTitle='6 cities'
      className={cn({'page--favorites-empty' : favoritesIsEmpty})}
    >
      <main className={cn('page__main', favoritesIsEmpty ? 'page__main--favorites-empty' : 'page__main--favorites')}>
        <div className="page__favorites-container container">
          {favoritesIsEmpty &&
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>}
          {!favoritesIsEmpty &&
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoriteOffersByCity).map((cityName) => (
                <li className="favorites__locations-items" key={cityName}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#/">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <PlaceCardList
                      offers={favoriteOffersByCity[cityName]}
                      type='favorites'
                      classNamePrefix='favorites'
                    />
                  </div>
                </li>))}
            </ul>
          </section>}
        </div>
      </main>
    </LayoutBase>
  );
}
