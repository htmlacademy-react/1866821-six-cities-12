import { City } from './city';
import { Host } from './host';
import { Location } from './location';

export type Offers = Offer[];

export interface OffersByCity {
  [city: string]: Offers;
}

export type Offer = {
  id: number;
  location: Location;
  description: string;
  host: Host;
  goods: Good[];
  price: number;
  maxAdults: number;
  bedrooms: number;
  type: Placement;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  title: string;
  images: string[];
  previewImage: string;
  city: City;
};


export type Good =
  'Fridge' |
  'Dishwasher' |
  'Baby seat' |
  'Air conditioning' |
  'Laptop friendly workspace' |
  'Breakfast' |
  'Washer' |
  'Towels'

export type Placement =
  'room' |
  'hotel' |
  'apartment' |
  'house'
