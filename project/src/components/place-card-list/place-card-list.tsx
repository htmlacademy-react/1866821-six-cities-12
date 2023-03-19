import {useState} from 'react';
import { NO_CARD_ID } from '../../const';
import { Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offers;
}

export default function PlaceCardList({offers}: PlaceCardListProps) {
  const [activeCardId, setActiveCardId] = useState(NO_CARD_ID);

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onCardActive={setActiveCardId}/>
      ))}
    </>
  );
}
