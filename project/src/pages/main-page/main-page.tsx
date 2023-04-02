import { mockCity } from '../../mocks/cities';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Sort from '../../components/sort/sort';
import LayoutBase from '../../layouts/layout-base/layout-base';
import { Offers } from '../../types/offer';
import { Point } from 'types/point';
import { getPointsList } from '../../utils/points';
import { useState } from 'react';

type MainPageProps = {
  offers: Offers;
}

export default function MainPage({offers}: MainPageProps) {

  const points = getPointsList(offers);

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint);
  };

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
                <PlaceCardList offers={offers} classNamePrefix='cities' type='cities' onListItemHover={onListItemHover}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className='cities__map'
                city={mockCity}
                points={points}
                selectedPoint={selectedPoint}
              />
            </div>
          </div>
        </div>
      </main>
    </LayoutBase>
  );
}
