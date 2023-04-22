import Logo from '../../components/logo/logo';
import LoginForm from '../../components/login-form/login-form';
import LayoutBase from '../../layouts/layout-base/layout-base';

export default function LoginPage() {

  return (
    <LayoutBase pageTitle="login" className="page--gray page--login">
      <>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo type='header'/>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginForm />
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#/">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </>
    </LayoutBase>
  );
}
