import { RotatingSquare } from 'react-loader-spinner';
import styles from './spinner-error.module.css';

export default function SpinnerError() {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color="rgb(65, 128, 197)"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass={styles.spinnerWrap}
      visible
    />
  );
}
