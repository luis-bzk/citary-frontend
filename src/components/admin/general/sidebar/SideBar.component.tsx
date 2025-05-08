import { LuArrowLeftToLine, LuArrowRightToLine } from 'react-icons/lu';

import { useUIStore } from '@/store/ui';
import styles from './styles.module.css';
import { MenuOptionsComponent } from '@/components/admin/general';

export function SideBarComponent() {
  const { sidebarIsCollapsed, sidebarToggleCollapse } = useUIStore();

  return (
    <div className={`${styles.side_container} ${sidebarIsCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        {!sidebarIsCollapsed && <h1 className={styles.title}>My Appointments</h1>}

        <button onClick={sidebarToggleCollapse} className={styles.toggle_button}>
          {sidebarIsCollapsed ? <LuArrowRightToLine /> : <LuArrowLeftToLine />}
        </button>
      </div>

      <MenuOptionsComponent />
    </div>
  );
}
