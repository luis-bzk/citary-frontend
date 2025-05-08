import { LuFileMinus, LuFilePenLine } from 'react-icons/lu';
import styles from './styles.module.css';

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export function ActionButtonsComponent({ onDelete, onEdit }: Props) {
  return (
    <div className={styles.action_buttons}>
      <i className={`${styles.action_icon} ${styles.edit}`} onClick={onEdit}>
        <LuFilePenLine />
      </i>

      <i className={`${styles.action_icon} ${styles.delete}`} onClick={onDelete}>
        <LuFileMinus />
      </i>
    </div>
  );
}
