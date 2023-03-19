import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockFavoriteOffers } from './mocks/favorites';
import { mockOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      favoriteOffers={mockFavoriteOffers}
    />
  </React.StrictMode>,
);
