import { Error } from 'types/state';
import { store } from '../store';
import { setError } from '../store/actions';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (error: Error): void => {
  store.dispatch(setError({error}));
  store.dispatch(clearErrorAction());
};
