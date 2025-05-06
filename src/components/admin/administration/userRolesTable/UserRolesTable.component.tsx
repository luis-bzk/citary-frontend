import { ColumnDef } from '@tanstack/react-table';

import styles from './styles.module.css';
import { TableComponent } from '@/components/shared';
import { Role, User, UserRole } from '@/schemas';
import { LuPencil, LuTrash2 } from 'react-icons/lu';
import { RECORD_STATUS } from '@/utils';

interface Props {
  userRoles: UserRole[];
}

const columns: ColumnDef<UserRole>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    cell: (info) => <span>{info.getValue<number>()}</span>,
  },
  {
    header: 'Nombre completo',
    accessorFn: (row) => `${row.user.name} ${row.user.last_name}`,
    id: 'fullName',
    cell: (info) => <span>{info.getValue<string>()}</span>,
  },
  {
    header: 'Correo electrónico',
    accessorKey: 'user',
    cell: (info) => <span>{info.getValue<User>().email}</span>,
  },
  {
    header: 'Rol',
    accessorKey: 'role',
    cell: (info) => <span>{info.getValue<Role>().name}</span>,
  },
  {
    header: 'Fecha de creación',
    accessorKey: 'created_date',
    cell: (info) => {
      const date = new Date(info.getValue<string>());
      return <span>{date.toLocaleDateString()}</span>;
    },
  },
  {
    header: 'Estado',
    accessorKey: 'record_status',
    cell: (info) => {
      const isActive: boolean = info.getValue<string>() === RECORD_STATUS.AVAILABLE;
      return (
        <span className={`${styles.tag_status} ${isActive ? styles.active : styles.deactivated}`}>
          {isActive ? 'Activo' : 'Inactivo'}
        </span>
      );
    },
  },
  {
    header: 'Acciones',
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className={styles.action_buttons}>
          <i className={`${styles.action_icon} ${styles.edit}`} onClick={() => console.log(id)}>
            <LuPencil />
          </i>

          <i className={`${styles.action_icon} ${styles.delete}`}>
            <LuTrash2 />
          </i>
        </div>
      );
    },
  },
];

export function UserRolesTable({ userRoles }: Props) {
  return (
    <div>
      <TableComponent columns={columns} rows={userRoles} inputText='Juan' labelText='Filtrar usuario' />
    </div>
  );
}
