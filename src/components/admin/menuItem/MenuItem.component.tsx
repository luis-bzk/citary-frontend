import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useUIStore } from '@/store/ui';
import { IMenuItem } from '@/schemas';

interface Props {
  item: IMenuItem;
}
export function MenuItemComponent({ item }: Props) {
  const { sidebarIsCollapsed } = useUIStore();

  return (
    <li className={styles.menu_item}>
      <Link to={item.link} className={styles.menu_link}>
        <i className={styles.icon}>{item.icon}</i>
        {!sidebarIsCollapsed && <span className={styles.text}>{item.name}</span>}
      </Link>
    </li>
  );
}
