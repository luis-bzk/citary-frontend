import {
  LuBell,
  LuBuilding2,
  LuClipboardList,
  LuClock,
  LuGlobe,
  LuIdCard,
  LuKeySquare,
  LuLayoutDashboard,
  LuMapPin,
  LuPhone,
  LuSquareUser,
  LuVenetianMask,
} from 'react-icons/lu';
import styles from './styles.module.css';
import { useUIStore } from '@/store/ui';
import { MenuItemComponent } from '@/components/admin/general';

const menuOptions = [
  {
    title: 'Panel de Administración',
    options: [{ name: 'Inicio', link: '/admin', icon: <LuLayoutDashboard /> }],
  },
  {
    title: 'Gestión de Seguridad',
    options: [
      { name: 'Usuarios', link: '/admin/administration/users', icon: <LuSquareUser /> },
      { name: 'Roles', link: '/admin/administration/roles', icon: <LuClipboardList /> },
      { name: 'Permisos', link: '/admin/administration/permissions', icon: <LuKeySquare /> },
      { name: 'Sesiones activas', link: '/admin/security/sessions', icon: <LuClock /> },
    ],
  },
  {
    title: 'Gestión Geográfica',
    options: [
      { name: 'Países', link: '/admin/location/countries', icon: <LuGlobe /> },
      { name: 'Provincias', link: '/admin/location/provinces', icon: <LuMapPin /> },
      { name: 'Ciudades', link: '/admin/location/cities', icon: <LuBuilding2 /> },
    ],
  },
  {
    title: 'Configuración de Personas',
    options: [
      { name: 'Géneros', link: '/admin/people/genders', icon: <LuVenetianMask /> },
      { name: 'Tipos de documento', link: '/admin/people/id-types', icon: <LuIdCard /> },
      { name: 'Tipos de teléfono', link: '/admin/people/phone-types', icon: <LuPhone /> },
    ],
  },
  {
    title: 'Notificaciones del Sistema',
    options: [{ name: 'Tipos de notificación', link: '/admin/notifications/types', icon: <LuBell /> }],
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
