import { FavoritesChange, SortDirection, SortKinds } from '../const';
import { Offer, Offers, OffersByCity } from '../types/offer';

export const groupOffers = (offers: Offers): OffersByCity => offers.reduce(
  (offersByCity: OffersByCity, offer) => {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name].push(offer);
    return offersByCity;
  },{}
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

export const offerInOffers = (offers: Offers, offer: Offer): boolean => {
  const elem = offers.find((item) => (item.id === offer.id));
  if (elem) {
    return true;
  }
  return false;
};

export const removeOfferFromOffers = (offers: Offers, offer: Offer) => offers.filter((item) => (item.id !== offer.id));


export const changeIsFavoriteFields = (offers: Offers, favoriteOffers: Offers, changeType: FavoritesChange) => {
  const newArr = offers.map((offer) => {
    const offerInFavorites = favoriteOffers.find((item) => (item.id === offer.id));
    if(offerInFavorites) {
      return {
        ...offer,
        isFavorite: true
      };
    }
    return {
      ...offer,
      isFavorite: changeType === FavoritesChange.Remove ? false : offer.isFavorite
    };
  });
  return newArr;
};
