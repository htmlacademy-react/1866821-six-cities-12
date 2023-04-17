import Logo from '../logo/logo';
import LogSign from '../../components/log-sign/log-sign/log-sign';

export default function PageHeader() {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type='header'/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <LogSign />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
