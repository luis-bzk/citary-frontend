import { ReactNode } from 'react';
import styles from './styles.module.css';
import {
  IoWarningOutline,
  IoAlertCircleOutline,
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';

interface Props {
  message: string;
  variant: 'default' | 'outlined' | 'filled';
  severity: 'error' | 'warning' | 'info' | 'success';
  plusComponent?: ReactNode;
  addClassName?: string;
}

export function Alert({ message, variant, severity, plusComponent, addClassName }: Props) {
  const containerClass = `${styles.alert_base} ${styles[`${variant}_${severity}`]} ${addClassName || ''}`;
  const iconClass = `${styles.icon_base} ${styles[`icon_${variant}_${severity}`]}`;

  return (
    <div className={containerClass}>
      <i className={iconClass}>
        {severity === 'error' && <IoWarningOutline />}
        {severity === 'warning' && <IoAlertCircleOutline />}
        {severity === 'info' && <IoInformationCircleOutline />}
        {severity === 'success' && <IoCheckmarkCircleOutline />}
      </i>
      <div className={styles.content}>
        <p>{message}</p>
        {plusComponent && plusComponent}
      </div>
    </div>
  );
}
