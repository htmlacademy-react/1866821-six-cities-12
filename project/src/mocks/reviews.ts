import { Reviews } from '../types/review';

export const mockReviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('Sat Mar 18 2023 07:48:54 GMT+0300 (Москва, стандартное время)'),
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('Sat Mar 20 2022 07:48:54 GMT+0300 (Москва, стандартное время)'),
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/2.png',
      id: 4,
      isPro: false,
      name: 'Poliver.conner'
    }
  }
];
