import {useState} from 'react';
import { NO_CARD_ID } from '../../const';
import { Offers, OffersList } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offers;
  classNamePrefix: string;
  type: OffersList;
}

export default function PlaceCardList({offers, classNamePrefix, type}: PlaceCardListProps) {
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
        />
      ))}
    </>
  );
}
