import { User } from './user';

export type Reviews = Review[];

export type Review = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
}
