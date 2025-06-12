import styles from './styles.module.css';
import { WindowModal } from '@/components/shared';
import { useDeleteProvince } from '@/hooks';

interface Props {
  closeModal: () => void;
  provinceId: number;
}

export function DeleteProvinceModalComponent({ closeModal, provinceId }: Props) {
  const provinceHook = useDeleteProvince();

  const confirmDeleteProvince = () => {
    provinceHook.mutate(provinceId);
    closeModal();
  };
  return (
    <WindowModal closeModal={closeModal} title='Eliminar provincia'>
      <div>
        <p className={styles.message}>
          ¿Estás seguro de que deseas eliminar esta provincia? Esta acción no se puede deshacer.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.confirm}`} onClick={confirmDeleteProvince}>
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
