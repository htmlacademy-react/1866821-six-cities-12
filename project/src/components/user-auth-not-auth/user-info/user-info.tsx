import Avatar from '../../avatar/avatar';
import { UserData } from '../../../types/user-data';

export type LogInfoProps = {
  userData: UserData | null;
  favoritesNumber: number;
}

export default function UserInfo({userData = null, favoritesNumber}: LogInfoProps) {

  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#/">

        <Avatar avatarUrl={userData && userData.avatarUrl} type='loginfo' classNamePrefix='header'/>

        {userData &&
          <>
            <span className="header__user-name user__name">{userData.email}</span>
            <span className="header__favorite-count">{favoritesNumber}</span>
          </>}
      </a>
    </li>
  );
}
