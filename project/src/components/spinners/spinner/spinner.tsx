import { Oval } from 'react-loader-spinner';
import styles from './spinner.module.css';

type SpinnerProps = {
  width?: number;
  height?: number;
}

export default function Spinner({width = 80, height = 80}: SpinnerProps) {
  return (
    <div className={styles.spinnerWrap}>
      <Oval
        height = {height}
        width = {width}
        color = '#FF9000'
        secondaryColor="#4481C3"
        ariaLabel = 'three-dots-loading'
      />
    </div>
  );
}
