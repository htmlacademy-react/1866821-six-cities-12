import { useRef, useState } from 'react';
import cn from 'classnames';
import { SortKinds } from '../../../const';
import SortOptionsItem from '../sort-options-item/sort-options-item';
import { SortType } from 'types/sort';
import { useOnClickOutside } from '../../../hooks/use-click-outside';

type SortProps = {
  currentSort: string;
}

export default function Sort({currentSort}: SortProps) {

  const [placesListIsOpen, setPlacesListIsOpen] = useState(false);
  const sortElementRef = useRef<HTMLUListElement>(null);

  const clickOutsidehandler = () => {
    setPlacesListIsOpen(false);
  };

  useOnClickOutside(sortElementRef, clickOutsidehandler);

  const sortOpenListClassName = placesListIsOpen ? 'places__options--opened' : '';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setPlacesListIsOpen(!placesListIsOpen)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul ref={sortElementRef} className={cn('places__options', 'places__options--custom', sortOpenListClassName)} >

        {Object.keys(SortKinds).map((sortType: keyof SortType) => (
          <SortOptionsItem
            key={SortKinds[sortType]}
            sortType={sortType}
            className={(SortKinds[sortType] === currentSort) ? 'places__option--active' : ''}
            onOptionClick={setPlacesListIsOpen}
          />
        ))}
      </ul>
    </form>
  );
}
