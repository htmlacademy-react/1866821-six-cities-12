import { Oval } from 'react-loader-spinner';
import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinnerWrap}>
      <Oval
        height = "80"
        width = "80"
        color = '#FF9000'
        secondaryColor="#4481C3"
        ariaLabel = 'three-dots-loading'
      />
    </div>
  );
}
