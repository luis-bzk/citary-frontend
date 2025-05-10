import styles from './styles.module.css';
import { WindowModal } from '@/components/shared';
import { useDeleteUser } from '@/hooks';

interface Props {
  closeModal: () => void;
  userId: number;
}

export function DeleteUserModalComponent({ closeModal, userId }: Props) {
  const userHook = useDeleteUser();

  const confirmDeleteUser = () => {
    userHook.mutate(userId);
    closeModal();
  };
  return (
    <WindowModal closeModal={closeModal} title='Eliminar usuario'>
      <div>
        <p className={styles.message}>
          ¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.confirm}`} onClick={confirmDeleteUser}>
            Si, continuar
          </button>
          <button className={`${styles.button} ${styles.cancel}`} onClick={closeModal}>
            No, cancelar
          </button>
        </div>
      </div>
    </WindowModal>
  );
}
