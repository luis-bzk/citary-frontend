import { ColumnDef } from '@tanstack/react-table';

import { TableComponent } from '@/components/shared';
import { Role, User, UserRole } from '@/schemas';
import { RECORD_STATUS } from '@/utils';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';

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
    accessorFn: (row) => `${row.user.name} ${row.user.lastname}`,
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
      return <StatusTagComponent isActive={isActive} />;
    },
  },
  {
    header: 'Acciones',
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      const editUserRoleFn = () => console.log(id);
      const deleteUserRoleFn = () => console.log(id);
      return <ActionButtonsComponent onEdit={editUserRoleFn} onDelete={deleteUserRoleFn} />;
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
