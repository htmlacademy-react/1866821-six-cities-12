import cn from 'classnames';
import { useAppDispatch } from '../../../hooks/base';
import { SortType } from '../../../types/sort';
import { SortKinds } from '../../../const';
import { changeSort } from '../../../store/action';

type SortOptionsItemProps = {
  sortType: keyof SortType;
  className?: string;
  onOptionClick: (placesListIsOpen: boolean) => void;
}

export default function SortOptionsItem({sortType, className, onOptionClick}: SortOptionsItemProps) {
  const dispatch = useAppDispatch();
  return (
    <li
      className={cn('places__option', 'places', className)}
      tabIndex={0}
      onClick={() => {
        onOptionClick(false);
        dispatch(changeSort({sortType}));
      }}
    >
      {SortKinds[sortType]}
    </li>
  );
}
