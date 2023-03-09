import {Link} from 'react-router-dom';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';
import styles from './not-found-page.module.css';

function NotFoundPage() {
  return (
    <div className="page page--gray page--not-found">
      <PageHeader/>
      <section className={`container ${styles['container--centered']}`}>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
