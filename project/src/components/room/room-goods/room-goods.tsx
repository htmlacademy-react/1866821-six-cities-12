import { Good } from '../../../types/offer';

type RoomGoodsProps = {
  goods: Good[];
}

export default function RoomGoods({goods}: RoomGoodsProps) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((goodName) => (
          <li key={goodName} className="property__inside-item">
            {goodName}
          </li>))}
      </ul>
    </div>
  );
}
