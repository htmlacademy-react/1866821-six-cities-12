import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const RENTAL_OFFERS_NUMBER = 5;

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalOffersNumber={RENTAL_OFFERS_NUMBER}/>
  </React.StrictMode>,
);
