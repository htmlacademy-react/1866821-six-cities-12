import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  isAuthorised: boolean;
}

function PrivateRoute({children, isAuthorised}: PrivateRouteProps) {
  return (
    isAuthorised
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
