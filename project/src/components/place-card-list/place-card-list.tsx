import { Offers, OffersList } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offers;
  classNamePrefix: string;
  type: OffersList;
  onListItemActive: (cardId: number) => void;
}

export default function PlaceCardList({offers, classNamePrefix, type, onListItemActive}: PlaceCardListProps) {

  return (
    <>
      {offers.map((offer) => (
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
