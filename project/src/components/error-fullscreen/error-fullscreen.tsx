import SpinnerError from '../spinners/spinner-error/spinner-error';
import styles from './error-fullscreen.module.css';
import cn from 'classnames';

export default function ErrorFullScreen() {
  return (
    <div className="page page--gray page--not-found">
      <div className={cn('cities__status-wrapper', 'tabs__content', styles.errorWrap)}>
        <SpinnerError />
        <b className="cities__status">Something went wrong</b>
        <p className="cities__status-description">Try again letter</p>
      </div>
    </div>
  );
}
