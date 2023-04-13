import { useState } from 'react';
import cn from 'classnames';
import { SortKinds } from '../../../const';
import SortOptionsItem from '../sort-options-item/sort-options-item';
import { SortType } from 'types/sort';

type SortProps = {
  currentSort: string;
}

export default function Sort({currentSort}: SortProps) {

  const [placesListIsOpen, setPlacesListIsOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
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
      <ul className={cn('places__options', 'places__options--custom', placesListIsOpen ? 'places__options--opened' : '')} >

        {Object.keys(SortKinds).map((sortKind: keyof SortType) => (
          <SortOptionsItem
            key={SortKinds[sortKind]}
            sortKind={sortKind}
            checked
            onOptionClick={setPlacesListIsOpen}
          />
        ))}
      </ul>
    </form>
  );
}
