import { logoutAction } from '../../../store/api-actions';
import { AppRoute } from '../../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/base';

type SignProps = {
  isAuthorized: boolean;
}

export default function LogInLogOut({isAuthorized}: SignProps) {
  const signClassName = isAuthorized ? 'header__signout' : 'header__login';
  const signText = isAuthorized ? 'Sign out' : 'Sign in';
  const dispatch = useAppDispatch();

  return (
    <li className="header__nav-item">
      <Link className="header__nav-link"
        to={AppRoute.Login}
        onClick={() => {
          isAuthorized && dispatch(logoutAction());
        }}
      >
        <span className={signClassName}>{signText}</span>
      </Link>
    </li>
  );
}
