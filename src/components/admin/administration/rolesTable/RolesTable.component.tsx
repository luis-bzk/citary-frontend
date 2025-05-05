import { ColumnDef } from '@tanstack/react-table';

import styles from './styles.module.css';
import { TableComponent } from '@/components/shared';
import { Role } from '@/schemas';
import { LuPencil, LuTrash2 } from 'react-icons/lu';

interface Props {
  roles: Role[];
}

const columns: ColumnDef<Role>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    cell: (info) => <span>{info.getValue<number>()}</span>,
  },
  {
    header: 'Nombre',
    accessorKey: 'name',
    cell: (info) => <span>{info.getValue<string>()}</span>,
  },
  {
    header: 'Descripción',
    accessorKey: 'description',
    cell: (info) => <span>{info.getValue<string>()}</span>,
  },
  {
    header: 'Estado',
    accessorKey: 'record_status',
    cell: (info) => {
      const isActive = info.getValue<boolean>();
      return (
        <span className={`${styles.tag_status} ${isActive ? styles.active : styles.deactivated}`}>
          {isActive ? 'Activo' : 'Inactivo'}
        </span>
      );
    },
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
    header: 'Acciones',
    accessorKey: 'id',
    cell: (info) => {
      const id = info.getValue<number>();
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

export function RolesTable({ roles }: Props) {
  return (
    <div>
      <TableComponent columns={columns} rows={roles} inputText='Juan' labelText='Filtrar usuario' />
    </div>
  );
}
