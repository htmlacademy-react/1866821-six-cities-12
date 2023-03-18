import LayoutBase from '../../layouts/layout-base/layout-base';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { Offers } from '../../types/offer';

type FavoritesPageProps = {
  offers: Offers;
}

export default function FavoritesPage({offers}: FavoritesPageProps) {

  const favoriteCitiesNames = Array.from(new Set(offers.map((city) => city.city.name)));

  return (
    <LayoutBase withBaseFooter pageTitle='6 cities' className='page--gray page--main'>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCitiesNames.map((cityName) => {
                const cityOffers = offers.filter((offer) => offer.city.name === cityName);
                return(
                  <li className="favorites__locations-items" key={cityName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#/">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <PlaceCardList offers={cityOffers}/>
                    </div>
                  </li>);
              })}
            </ul>
          </section>
        </div>
      </main>
    </LayoutBase>
  );
}
