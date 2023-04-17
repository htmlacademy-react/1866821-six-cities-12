import { bringFirstCharToUpperCase } from '../../../utils/common';
import Avatar from '../../avatar/avatar';

type RoomHostProps = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
  description: string;
}

export default function RoomHost({name, isPro, avatarUrl, description}: RoomHostProps) {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <Avatar avatarUrl={avatarUrl} classNamePrefix='property' type='host'/>
        <span className="property__user-name">
          {name}
        </span>
        <span className="property__user-status">
          {isPro && 'Pro'}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {bringFirstCharToUpperCase(description)}
        </p>
      </div>
    </div>
  );
}
