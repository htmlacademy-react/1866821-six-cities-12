import CitiesItem from '../cities-item/cities-item';
import { City } from '../../types/city';

type CitiesListProps = {
  activeCity: City;
  cities: City[];
}

export default function CitiesList({cities, activeCity}: CitiesListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city: City) => (
            <CitiesItem key={city.name} city={city} isActive={activeCity.name === city.name}/>
          ))}
        </ul>
      </section>
    </div>
  );
}
