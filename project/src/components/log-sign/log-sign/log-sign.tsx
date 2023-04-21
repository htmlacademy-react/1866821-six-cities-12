import { useAppSelector } from '../../../hooks/base';
import LogInfo from '../log-info/logInfo';
import Sign from '../sign/sign';
import { AuthorizationStatus } from '../../../const';
import { getAuthorizationLoadStatus, getAuthorizationStatus, getUserData } from '../../../store/user-process/user-process.selectors';
import Spinner from '../../../components/spinners/spinner/spinner';

const spinnerSize = {
  width: 25,
  height: 25
};

export default function LogSign() {

  const authStatus = useAppSelector(getAuthorizationStatus);
  const authLoadStatus = useAppSelector(getAuthorizationLoadStatus);
  const userData = useAppSelector(getUserData);
  const isAuthorized = (authStatus === AuthorizationStatus.Auth);

  if (authLoadStatus.isLoading) {
    return (
      <Spinner width={spinnerSize.width} height={spinnerSize.height}/>
    );
  }

  return (
    <>
      <LogInfo userData={userData}/>
      <Sign isAuthorized={isAuthorized}/>
    </>
  );
}
