import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export function AuthLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.left_side_image_container}></div>

      <div className={styles.right_side_container}>
        <div className={styles.background_blur}></div>
        <div className={styles.box_container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
