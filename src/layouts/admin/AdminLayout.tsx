import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';
import { SideBarComponent } from '@/components/admin/general';

export function AdminLayout() {
  return (
    <div className={styles.layout_container}>
      <SideBarComponent />

      <div className={styles.layout_content}>
        <Outlet />
      </div>
    </div>
  );
}
