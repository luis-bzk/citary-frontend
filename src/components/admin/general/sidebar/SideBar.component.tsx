import { LuArrowLeftToLine, LuArrowRightToLine, LuMoon, LuSunMedium } from 'react-icons/lu';

import { useUIStore } from '@/store/ui';
import styles from './styles.module.css';
import { MenuOptionsComponent } from '@/components/admin/general';
import { useThemeStore } from '@/store/ui/theme.store';

export function SideBarComponent() {
  const { sidebarIsCollapsed, sidebarToggleCollapse } = useUIStore();
  const { toggleDarkMode, darkMode } = useThemeStore();

  return (
    <div className={`${styles.side_container} ${sidebarIsCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>{!sidebarIsCollapsed && <h1 className={styles.title}>Citary</h1>}</div>

      <button onClick={sidebarToggleCollapse} className={styles.toggle_button}>
        {sidebarIsCollapsed ? <LuArrowRightToLine /> : <LuArrowLeftToLine />}
      </button>

      <MenuOptionsComponent />

      <div>
        <button className={styles.button_dark_mode} onClick={toggleDarkMode}>
          {darkMode ? <LuSunMedium /> : <LuMoon />}
        </button>
      </div>
    </div>
  );
}
