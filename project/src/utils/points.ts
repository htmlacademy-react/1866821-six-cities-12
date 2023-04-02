import { Offers } from 'types/offer';
import { Points } from 'types/point';

export const getPointsList = (offers: Offers): Points=>
  offers.map((offer) => ({
    title: offer.title,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));

