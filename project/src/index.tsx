import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockFavoriteOffers } from './mocks/favorites';
import {Provider} from 'react-redux';
import {store} from './store';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        favoriteOffers={mockFavoriteOffers}
      />
    </Provider>
  </React.StrictMode>,
);
