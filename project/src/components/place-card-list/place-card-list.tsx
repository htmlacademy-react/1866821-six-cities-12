import { Offers, OffersList } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  localOffers: Offers;
  classNamePrefix: string;
  type: OffersList;
  onListItemActive?: (cardId: number) => void;
}

export default function PlaceCardList({
  localOffers,
  classNamePrefix,
  type,
  onListItemActive
}: PlaceCardListProps) {
  return (
    <>
      {localOffers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          type={type}
          classNamePrefix={classNamePrefix}
          onCardActive={onListItemActive}
        />
      ))}
    </>
  );
}
