import { SortDirection, SortKinds } from '../const';
import { Offers, OffersByCity } from '../types/offer';

export const groupOffers = (offers: Offers): OffersByCity => offers.reduce(
  (offersByCity: OffersByCity, offer) => {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name].push(offer);
    return offersByCity;
  }
  ,
  {}
);

export const sortOffers = (sortKind: string, offers: Offers): Offers => {
  switch(sortKind) {
    case SortKinds.PRICE_HIGH:
      return offers.sort((offerFirst, offerSecond) => offerFirst.price > offerSecond.price ? SortDirection.UP : SortDirection.LOW);
    case SortKinds.PRICE_LOW:
      return offers.sort((offerFirst, offerSecond) => offerFirst.price > offerSecond.price ? SortDirection.LOW : SortDirection.UP);
    case SortKinds.RATED_FIRST:
      return offers.sort((offerFirst, offerSecond) => offerFirst.rating > offerSecond.rating ? SortDirection.LOW : SortDirection.UP);
    default:
      return offers;
  }
};
