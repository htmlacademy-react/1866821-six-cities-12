import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockFavoriteOffers } from './mocks/favorites';
import { mockOffers } from './mocks/offers';
import { mockReviews } from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers={mockOffers}
        favoriteOffers={mockFavoriteOffers}
        reviews={mockReviews}
      />
    </Provider>
  </React.StrictMode>,
);
