import { bringFirstCharToUpperCase } from '../../../utils/common';

type RoomFeaturesProps = {
  offerType: string;
  bedroomsNumber: number;
  maxAdultsNumber: number;
}

export default function RoomFeatures({offerType, bedroomsNumber, maxAdultsNumber}: RoomFeaturesProps) {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {bringFirstCharToUpperCase(offerType)}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedroomsNumber} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdultsNumber} adults
      </li>
    </ul>
  );
}
