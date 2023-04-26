import cn from 'classnames';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Sort from '../../components/sort/sort/sort';
import LayoutBase from '../../layouts/layout-base/layout-base';
import { useEffect, useState } from 'react';
import { NO_CARD_ID } from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks/base';
import { groupOffers, sortOffers } from '../../utils/offers';
import { bringFirstCharToUpperCase } from '../../utils/common';
import NoPlaces from '../../components/no-places/no-places';
import Spinner from '../../components/spinners/spinner/spinner';
import { getCity, getSort } from '../../store/app-aside-process/app-aside-process.selectors';
import { getOffers, getOffersLoadStatus } from '../../store/offers-process/offers-process.selectors';
import { fetchOffersAction } from '../../store/api-actions';

export default function MainPage() {
  const [activeOfferId, setActiveOfferId] = useState(NO_CARD_ID);

  const city = useAppSelector(getCity);
  const sort = useAppSelector(getSort);
  const offers = useAppSelector(getOffers);
  const offersLoadStatus = useAppSelector(getOffersLoadStatus);
  const filteredOffers = groupOffers(offers)[city.name];
  const sortedOffers = sortOffers(sort, filteredOffers ?? []);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <LayoutBase
      withBaseHeader
      pageTitle='6 cities'
      className='page--gray page--main'
    >
      <main className={cn('page__main', 'page__main--index', {'page__main--index-empty' : !filteredOffers})}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesList activeCity={city}/>

        {offersLoadStatus.isLoading && <Spinner />}

        {!filteredOffers && offersLoadStatus.isSuccess &&
          <NoPlaces />}

        {filteredOffers && offersLoadStatus.isSuccess &&
            <div className="cities">
              <div className="cities__places-container container">
                {offersLoadStatus.isSuccess &&
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">
                      {filteredOffers.length} places to stay in {bringFirstCharToUpperCase(city.name)}
                    </b>
                    <Sort currentSort={sort}/>
                    <div className="cities__places-list places__list tabs__content">
                      <PlaceCardList
                        localOffers={sortedOffers}
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
