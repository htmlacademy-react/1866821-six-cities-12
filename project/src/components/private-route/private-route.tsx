import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useAppSelector } from '../../hooks/base';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus.auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
