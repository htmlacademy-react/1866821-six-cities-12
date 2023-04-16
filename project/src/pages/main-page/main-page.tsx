import cn from 'classnames';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Sort from '../../components/sort/sort/sort';
import LayoutBase from '../../layouts/layout-base/layout-base';
import { useState } from 'react';
import { NO_CARD_ID } from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks/base';
import { groupOffers, sortOffers } from '../../utils/offers';
import { bringFirstCharToUpperCase } from '../../utils/common';
import NoPlaces from '../../components/no-places/no-places';
import Spinner from '../../components/spinner/spinner';


export default function MainPage() {
  const [activeOfferId, setActiveOfferId] = useState(NO_CARD_ID);

  const city = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = useAppSelector((state) => state.offersList);
  const filteredOffers = groupOffers(offers)[city.name];
  const sortedOffers = sortOffers(sortType, filteredOffers ?? []);
  const mainEmptyClassName = !filteredOffers ? 'page__main--index-empty' : '';
  const isOfferDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  return (
    <LayoutBase
      withBaseHeader
      pageTitle='6 cities'
      className='page--gray page--main'
    >
      <main className={cn('page__main', 'page__main--index', mainEmptyClassName)}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList activeCity={city}/>

        {!filteredOffers && !isOfferDataLoading &&
          <NoPlaces />}

        {isOfferDataLoading && <Spinner />}

        {filteredOffers && !isOfferDataLoading &&
            <div className="cities">
              <div className="cities__places-container container">
                {!isOfferDataLoading &&
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">
                      {filteredOffers.length} places to stay in {bringFirstCharToUpperCase(city.name)}
                    </b>
                    <Sort currentSort={sortType}/>
                    <div className="cities__places-list places__list tabs__content">
                      <PlaceCardList
                        offers={sortedOffers}
                        onListItemActive={setActiveOfferId}
                        classNamePrefix='cities'
                        type='cities'
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <Map
                      className='cities__map'
                      city={city}
                      offers={filteredOffers}
                      selectedOfferId={activeOfferId}
                    />
                  </div>
                </>}
              </div>
            </div>}
      </main>
    </LayoutBase>
  );
}
