import { WindowModal } from '@/components/shared';
import { useDeleteUser } from '@/hooks';
import { AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <WindowModal closeModal={closeModal} title='Eliminar usuario'>
        <div>
          <div>Estas seguro de querer eliminar el usuario?</div>
          <div>
            <button onClick={confirmDeleteUser}>si</button>
            <button>no</button>
          </div>
        </div>
      </WindowModal>
    </AnimatePresence>
  );
}
