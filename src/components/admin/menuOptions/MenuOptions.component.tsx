import { LuClipboardList, LuKeySquare, LuLayoutDashboard, LuSquareUser } from 'react-icons/lu';
import styles from './styles.module.css';
import { useUIStore } from '@/store/ui';
import { MenuItemComponent } from '@/components/admin';

const menuOptions = [
  {
    title: 'Dashboard',
    options: [{ name: 'Inicio', link: '#', icon: <LuLayoutDashboard /> }],
  },
  {
    title: 'Administración',
    options: [
      { name: 'Usuarios', link: '#', icon: <LuSquareUser /> },
      { name: 'Roles', link: '#', icon: <LuClipboardList /> },
      { name: 'Permisos', link: '#', icon: <LuKeySquare /> },
    ],
  },
];

export function MenuOptionsComponent() {
  const { sidebarIsCollapsed } = useUIStore();

  return (
    <div className={styles.container}>
      {menuOptions.map((m) => (
        <div className={styles.menu}>
          {!sidebarIsCollapsed && <p className={styles.title}>{m.title}</p>}

          <ul className={styles.menu_options}>
            {m.options.map((o) => (
              <MenuItemComponent item={o} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
