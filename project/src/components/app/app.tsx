import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/base';
import { checkAuthAction } from '../../store/api-actions';
import ErrorFullScreen from '../../components/error-fullscreen/error-fullscreen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../../components/history-route/history-route';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Spinner from '../../components/spinners/spinner/spinner';

function App() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus.unknown) {
    return (
      <Spinner fullHeight/>
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isAuthorised={authorizationStatus.auth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
          <Route
            path={AppRoute.Error}
            element={<ErrorFullScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
