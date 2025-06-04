import styles from './styles.module.css';
import { WindowModal } from '@/components/shared';
import { useDeleteCountry } from '@/hooks';

interface Props {
  closeModal: () => void;
  countryId: number;
}

export function DeleteCountryModalComponent({ closeModal, countryId }: Props) {
  const countryHok = useDeleteCountry();

  const confirmDeleteCountry = () => {
    countryHok.mutate(countryId);
    closeModal();
  };
  return (
    <WindowModal closeModal={closeModal} title='Eliminar país'>
      <div>
        <p className={styles.message}>
          ¿Estás seguro de que deseas eliminar este país? Esta acción no se puede deshacer.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.confirm}`} onClick={confirmDeleteCountry}>
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
