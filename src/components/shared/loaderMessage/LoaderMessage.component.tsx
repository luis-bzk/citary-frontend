import { LoaderSpinner } from '@/components/svg';
import styles from './styles.module.css';

interface Props {
  message: string;
}
export function LoaderMessageComponent({ message }: Props) {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>
        <LoaderSpinner light={false} />
      </i>
      <span className={styles.message}>{message}</span>
    </div>
  );
}
