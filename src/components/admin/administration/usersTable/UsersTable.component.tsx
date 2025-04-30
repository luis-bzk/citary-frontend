// components/admin/administration/UsersTable.tsx
import { TableComponent } from '@/components/shared';
import { User } from '@/schemas';
import { ColumnDef } from '@tanstack/react-table';

interface Props {
  users: User[];
  totalCount: number;
  limit: number;
  offset: number;
  onSearch: (value: string) => void;
  onPageChange: (offset: number) => void;
  onLimitChange: (limit: number) => void;
}

const columns: ColumnDef<User>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    cell: (info) => <span>{info.getValue<string>()}</span>,
  },
  {
    header: 'Nombre completo',
    accessorFn: (row) => `${row.name} ${row.last_name}`,
    id: 'fullName',
    cell: (info) => <span>{info.getValue<string>()}</span>,
  },
  {
    header: 'Correo electrónico',
    accessorKey: 'email',
    cell: (info) => <span>{info.getValue<string>()}</span>,
  },
  {
    header: 'Estado',
    accessorKey: 'record_status',
    cell: (info) => {
      const isActive = info.getValue<boolean>();
      return <span style={{ color: isActive ? 'green' : 'red' }}>{isActive ? 'Activo' : 'Inactivo'}</span>;
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
];

export function UsersTable({ users, totalCount, limit, offset, onSearch, onPageChange, onLimitChange }: Props) {
  return (
    <div>
      <TableComponent columns={columns} rows={users} inputText='buscar algo yo que se' labelText='mi poya' />
    </div>
  );
}
