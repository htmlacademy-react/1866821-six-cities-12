import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Sort from '../../components/sort/sort';
import LayoutBase from '../../layouts/layout-base/layout-base';
import { Offers } from '../../types/offer';
import { useState } from 'react';
import { NO_CARD_ID } from '../../const';

type MainPageProps = {
  offers: Offers;
}

export default function MainPage({offers}: MainPageProps) {

  const [activeOfferId, setActiveOfferId] = useState(NO_CARD_ID);

  return (
    <LayoutBase withBaseHeader pageTitle='6 cities' className='page--gray page--main'>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList offers={offers} onListItemActive={setActiveOfferId} classNamePrefix='cities' type='cities'/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className='cities__map'
                city={offers[0].city}
                offers={offers}
                selectedOfferId={activeOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </LayoutBase>
  );
}
