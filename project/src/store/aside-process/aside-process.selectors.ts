import { City } from 'types/city';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Aside].city;
export const getSort = (state: State): string => state[NameSpace.Aside].sort;
export const getHotelId = (state: State): number | null => state[NameSpace.Aside].hotelId;
