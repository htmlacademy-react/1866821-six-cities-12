import Logo from '../logo/logo';
import UserAuthNotAuth from '../../components/user-auth-not-auth/user-auth-not-auth/user-auth-not-auth';

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
              <UserAuthNotAuth />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
