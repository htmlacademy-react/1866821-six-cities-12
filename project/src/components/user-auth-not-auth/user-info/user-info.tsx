import Avatar from '../../avatar/avatar';
import { UserData } from '../../../types/user-data';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

export type LogInfoProps = {
  userData: UserData | null;
  favoritesNumber: number;
}

export default function UserInfo({userData = null, favoritesNumber}: LogInfoProps) {

  return (
    <li className="header__nav-item user">
      <span className="header__nav-link header__nav-link--profile">
        <Avatar avatarUrl={userData && userData.avatarUrl} type='loginfo' classNamePrefix='header'/>
        {userData &&
          <>
            <Link to={AppRoute.Favorites}className="header__user-name user__name">{userData.email}</Link>
            <span className="header__favorite-count">{favoritesNumber}</span>
          </>}
      </span>
    </li>
  );
}
