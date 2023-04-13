import cn from 'classnames';
import { useAppDispatch } from '../../../hooks/base';
import { SortType } from '../../../types/sort';
import { SortKinds } from '../../../const';
import { sortOffers } from '../../../store/action';

type SortOptionsItemProps = {
  sortKind: keyof SortType;
  checked?: boolean;
  onOptionClick: (placesListIsOpen: boolean) => void;
}

export default function SortOptionsItem({sortKind, checked, onOptionClick}: SortOptionsItemProps) {
  const dispatch = useAppDispatch();
  return (
    <li
      className={cn('places__option', 'places', checked ? 'places__option--active' : '')}
      tabIndex={0}
      onClick={() => {
        onOptionClick(false);
        dispatch(sortOffers({sortKind}));
      }}
    >
      {SortKinds[sortKind]}
    </li>
  );
}
