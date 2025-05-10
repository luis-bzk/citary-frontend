import { useEffect } from 'react';
import { LuX } from 'react-icons/lu';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

export function WindowModal({ children, title, closeModal }: Props) {
  // Opcional: bloqueo del scroll de fondo
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={`${styles.container} ${styles.open}`}>
      <div className={styles.window}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <i className={styles.icon} onClick={closeModal}>
            <LuX />
          </i>
        </div>

        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
