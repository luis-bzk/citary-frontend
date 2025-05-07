import { LuX } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

export function WindowModal({ children, title, closeModal }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.window}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            <i className={styles.icon} onClick={closeModal}>
              <LuX />
            </i>
          </div>

          <div className={styles.children}>{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
