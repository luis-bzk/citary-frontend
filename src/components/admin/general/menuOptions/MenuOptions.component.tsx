import { LuClipboardList, LuKeySquare, LuLayoutDashboard, LuSquareUser } from 'react-icons/lu';
import styles from './styles.module.css';
import { useUIStore } from '@/store/ui';
import { MenuItemComponent } from '@/components/admin/general';

const menuOptions = [
  {
    title: 'Dashboard',
    options: [{ name: 'Inicio', link: '/admin', icon: <LuLayoutDashboard /> }],
  },
  {
    title: 'Administración',
    options: [
      { name: 'Usuarios', link: '/admin/administration/users', icon: <LuSquareUser /> },
      { name: 'Roles', link: '/admin/administration/roles', icon: <LuClipboardList /> },
      { name: 'Permisos', link: '/admin/administration/permissions', icon: <LuKeySquare /> },
    ],
  },
];

export function MenuOptionsComponent() {
  const { sidebarIsCollapsed } = useUIStore();

  return (
    <div className={styles.container}>
      {menuOptions.map((m) => (
        <div className={styles.menu} key={m.title}>
          {!sidebarIsCollapsed && <p className={styles.title}>{m.title}</p>}

          <ul className={styles.menu_options}>
            {m.options.map((o) => (
              <MenuItemComponent item={o} key={o.name} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
