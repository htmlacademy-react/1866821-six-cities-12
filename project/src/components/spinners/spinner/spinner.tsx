import { Oval } from 'react-loader-spinner';
import styles from './spinner.module.css';
import cn from 'classnames';

type SpinnerProps = {
  width?: number;
  height?: number;
  fullHeight?: boolean;
}

export default function Spinner({width = 80, height = 80, fullHeight}: SpinnerProps) {
  return (
    <div className={cn(styles.spinnerWrap, {[styles.spinnerWrapfull] : fullHeight} )}>
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
