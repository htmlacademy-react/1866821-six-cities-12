import { useAppSelector } from '../../../hooks/base';
import { getAuthorizationStatus, getUserData } from '../../../store/user-process/user-process.selectors';
import Spinner from '../../spinners/spinner/spinner';
import UserInfo from '../user-info/user-info';
import LogInLogOut from '../log-in-log-out/log-in-log-out';

const spinnerSize = {
  width: 25,
  height: 25
};

export default function UserAuthNotAuth() {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  if (authStatus.unknown) {
    return (
      <Spinner width={spinnerSize.width} height={spinnerSize.height}/>
    );
  }

  return (
    <>
      <UserInfo userData={userData}/>
      <LogInLogOut isAuthorized={authStatus.auth}/>
    </>
  );
}
