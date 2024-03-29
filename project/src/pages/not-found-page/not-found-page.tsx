import {Link} from 'react-router-dom';
import styles from './not-found-page.module.css';
import cn from 'classnames';
import LayoutBase from '../../layouts/layout-base/layout-base';
import { AppRoute } from '../../const';

function NotFoundPage() {
  return (
    <LayoutBase withBaseHeader withBaseFooter pageTitle='not found' className='page--gray page--not-found'>
      <section className={cn('container', styles.containerCentered)}>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Root}>To main page</Link>
      </section>
    </LayoutBase>
  );
}

export default NotFoundPage;
