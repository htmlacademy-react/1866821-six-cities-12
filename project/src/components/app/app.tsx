import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';
import LayoutMain from '../../layouts/layout-main/layout-main';
import LayoutRooms from '../../layouts/layout-rooms/layout-rooms';

type AppProps = {
  rentalOffersNumber: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<LayoutMain />}>
            <Route
              index
              element={<MainPage rentalOffersNumber={props.rentalOffersNumber}/>}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route path={AppRoute.Room} element={<LayoutRooms />}>
              <Route
                path=":id"
                element={<RoomPage />}
              />
            </Route>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}
                >
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
