import styles from './styles.module.css';
import { WindowModal } from '@/components/shared';
import { useDeleteRole } from '@/hooks';

interface Props {
  closeModal: () => void;
  roleId: number;
}

export function DeleteRoleModalComponent({ closeModal, roleId }: Props) {
  const userHook = useDeleteRole();

  const confirmDeleteRole = () => {
    userHook.mutate(roleId);
    closeModal();
  };

  return (
    <WindowModal closeModal={closeModal} title='Eliminar rol  '>
      <div>
        <p className={styles.message}>
          ¿Estás seguro de que deseas eliminar este rol? Esta acción no se puede deshacer.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.confirm}`} onClick={confirmDeleteRole}>
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
