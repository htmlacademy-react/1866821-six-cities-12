import { Link } from 'react-router-dom';

type LogoProps = {
  type: 'header' | 'footer';
}

const sizes = {
  header: {
    width: 81,
    height: 41
  },
  footer: {
    width: 64,
    height: 33
  }
};

export default function Logo({type}: LogoProps) {
  const size = sizes[type];
  return (
    <Link className={`${type}__logo-link`} to='/'>
      <img
        className={`${type}footer__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={size.width}
        height={size.height}
      />
    </Link>
  );
}
