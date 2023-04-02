import LayoutBase from '../../layouts/layout-base/layout-base';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { Offers, OffersByCity } from '../../types/offer';
import { groupOffers } from '../../utils/favorites';
import { useState } from 'react';
import { NO_CARD_ID } from '../../const';

type FavoritesPageProps = {
  offers: Offers;
}


export default function FavoritesPage({offers}: FavoritesPageProps) {
  const offersByCity: OffersByCity = groupOffers(offers);

  const [activeOfferId, setActiveOfferId] = useState(NO_CARD_ID);

  return (
    <LayoutBase withBaseHeader withBaseFooter pageTitle='6 cities' className='page--gray page--main'>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(offersByCity).map((cityName) => (
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
                      offers={offersByCity[cityName]}
                      type='favorites'
                      classNamePrefix='favorites'
                      onListItemActive={setActiveOfferId}
                    />
                  </div>
                </li>))}
            </ul>
          </section>
        </div>
      </main>
    </LayoutBase>
  );
}
