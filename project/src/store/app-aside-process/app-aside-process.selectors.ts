import { City } from 'types/city';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.AppAside].city;
export const getSort = (state: State): string => state[NameSpace.AppAside].sort;
