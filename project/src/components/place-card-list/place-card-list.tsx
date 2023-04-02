import {useState} from 'react';
import { NO_CARD_ID } from '../../const';
import { Offers, OffersList } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offers;
  classNamePrefix: string;
  type: OffersList;
  onListItemHover: (listItemName: string) => void;
}

export default function PlaceCardList({offers, classNamePrefix, type, onListItemHover}: PlaceCardListProps) {
  const [activeCardId, setActiveCardId] = useState(NO_CARD_ID);

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          type={type}
          classNamePrefix={classNamePrefix}
          onCardActive={setActiveCardId}
          onCardHover={onListItemHover}
        />
      ))}
    </>
  );
}
