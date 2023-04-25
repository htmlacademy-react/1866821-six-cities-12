import { useAppSelector } from '../../hooks/base';
import { Offers, OffersList } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { getOffers } from '../../store/offers-process/offers-process.selectors';
import { getFavoriteOffers } from '../../store/favorite-offers-process/favorite-offers-process.selectors';

type PlaceCardListProps = {
  localOffers: Offers;
  classNamePrefix: string;
  type: OffersList;
  onListItemActive?: (cardId: number) => void;
}

export default function PlaceCardList({localOffers, classNamePrefix, type, onListItemActive}: PlaceCardListProps) {
  const globalOffers = useAppSelector(getOffers);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  return (
    <>
      {localOffers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          offers={globalOffers}
          favoriteOffers={favoriteOffers}
          type={type}
          classNamePrefix={classNamePrefix}
          onCardActive={onListItemActive}
        />
      ))}
    </>
  );
}
