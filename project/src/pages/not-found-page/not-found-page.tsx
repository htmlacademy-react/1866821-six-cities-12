import {Link} from 'react-router-dom';
import PageFooter from '../../components/page-parts/page-footer/page-footer';
import PageHeader from '../../components/page-parts/page-header/page-header';
import './not-found-page.css';

function NotFoundPage() {
  return (
    <div className="page page--gray page--not-found">
      <PageHeader/>
      <section className="container container--centered">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
