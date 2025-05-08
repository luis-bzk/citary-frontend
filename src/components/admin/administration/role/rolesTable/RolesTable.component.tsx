import { ColumnDef } from '@tanstack/react-table';

import { TableComponent } from '@/components/shared';
import { Role } from '@/schemas';
import { RECORD_STATUS } from '@/utils';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';

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
      const editRoleFn = () => console.log(id);
      const deleteRoleFn = () => console.log(id);
      return <ActionButtonsComponent onEdit={editRoleFn} onDelete={deleteRoleFn} />;
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
