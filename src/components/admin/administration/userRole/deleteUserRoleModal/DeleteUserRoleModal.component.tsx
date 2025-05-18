import styles from './styles.module.css';
import { WindowModal } from '@/components/shared';
import { useDeleteUserRole } from '@/hooks';

interface Props {
  closeModal: () => void;
  userRoleId: number;
}

export function DeleteUserRoleModalComponent({ closeModal, userRoleId }: Props) {
  const userRoleHook = useDeleteUserRole();

  const confirmDeleteUserRole = () => {
    userRoleHook.mutate(userRoleId);
    closeModal();
  };

  return (
    <WindowModal closeModal={closeModal} title='Eliminar Permiso'>
      <div>
        <p className={styles.message}>
          ¿Estás seguro de que deseas eliminar este permiso? Esta acción no se puede deshacer.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.confirm}`} onClick={confirmDeleteUserRole}>
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
