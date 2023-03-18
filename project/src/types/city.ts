import { Location } from './location';

export type City = {
  name: CityName;
  location: Location;
}

export type CityName =
  'Brussels' |
  'Paris' |
  'Cologne' |
  'Amsterdam' |
  'Hamburg' |
  'Dusseldorf'
