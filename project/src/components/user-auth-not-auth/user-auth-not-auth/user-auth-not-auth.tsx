import { useAppSelector } from '../../../hooks/base';
import { getAuthorizationStatus, getUserData } from '../../../store/user-process/user-process.selectors';
import Spinner from '../../spinners/spinner/spinner';
import UserInfo from '../user-info/user-info';
import LogInLogOut from '../log-in-log-out/log-in-log-out';
import { getFavoriteOffers } from '../../../store/favorite-offers-process/favorite-offers-process.selectors';

const spinnerSize = {
  width: 25,
  height: 25
};

export default function UserAuthNotAuth() {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  if (authStatus.unknown) {
    return (
      <Spinner width={spinnerSize.width} height={spinnerSize.height}/>
    );
  }

  return (
    <>
      <UserInfo userData={userData} favoritesNumber={favoriteOffers.length}/>
      <LogInLogOut isAuthorized={authStatus.auth}/>
    </>
  );
}
