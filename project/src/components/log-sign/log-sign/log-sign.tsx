import { useAppSelector } from '../../../hooks/base';
import LogInfo from '../log-info/logInfo';
import Sign from '../sign/sign';
import { AuthorizationStatus } from '../../../const';

export default function LogSign() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const isAuthorized = (authorizationStatus === AuthorizationStatus.Auth);

  return (
    <>
      <LogInfo userData={userData}/>
      <Sign isAuthorized={isAuthorized}/>
    </>
  );
}
