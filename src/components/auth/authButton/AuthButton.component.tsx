import styles from './styles.module.css';
interface Props {
  children: React.ReactNode;
}

export function AuthButtonComponent({ children }: Props) {
  return (
    <button type='submit' className={styles.button_auth}>
      {children}
    </button>
  );
}
