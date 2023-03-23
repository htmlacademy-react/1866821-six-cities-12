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
