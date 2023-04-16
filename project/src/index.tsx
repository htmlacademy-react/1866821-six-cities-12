import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockFavoriteOffers } from './mocks/favorites';
import { mockReviews } from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import { fetchOffersAction } from './store/api-actions';
import {ToastContainer} from 'react-toastify';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App
        favoriteOffers={mockFavoriteOffers}
        reviews={mockReviews}
      />
    </Provider>
  </React.StrictMode>,
);
