import styles from './styles.module.css';

interface Props {
  isActive: boolean;
}

export function StatusTagComponent({ isActive }: Props) {
  return (
    <span className={`${styles.tag_status} ${isActive ? styles.active : styles.deactivated}`}>
      {isActive ? 'Activo' : 'Inactivo'}
    </span>
  );
}
