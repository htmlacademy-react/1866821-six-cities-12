import cn from 'classnames';
import { City } from '../../types/city';
import {useAppDispatch} from '../../hooks/base';
import { changeCity } from '../../store/action';

type CitiesItemProps = {
  city: City;
  isActive: boolean;
}

export default function CitiesItem({city, isActive}: CitiesItemProps) {
  const dispatch = useAppDispatch();

  return(
    <li className="locations__item">
      <a
        onClick={() => dispatch(changeCity({city}))}
        className={cn(isActive && 'tabs__item--active', 'locations__item-link', 'tabs__item')}
        href="#/"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
