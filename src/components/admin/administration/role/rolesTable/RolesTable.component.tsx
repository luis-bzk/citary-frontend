import { useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { Role } from '@/schemas';
import { RECORD_STATUS } from '@/utils';
import { TableComponent } from '@/components/shared';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';
import { DeleteRoleModalComponent } from '@/components/admin/administration';

interface Props {
  roles: Role[];
}

export function RolesTable({ roles }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [roleSelected, setRoleSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const deleteRole = (id: number) => {
    setOpenModal(true);
    setRoleSelected(id);
  };

  const closeModal = () => setOpenModal((state) => !state);

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
      accessorKey: 'createdDate',
      cell: (info) => {
        const date = new Date(info.getValue<string>());
        return <span>{date.toLocaleDateString()}</span>;
      },
    },
    {
      header: 'Estado',
      accessorKey: 'recordStatus',
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
        const editRoleFn = () => navigate(`/admin/administration/roles/edit/${id}`);
        const deleteRoleFn = () => deleteRole(id);
        return <ActionButtonsComponent onEdit={editRoleFn} onDelete={deleteRoleFn} />;
      },
    },
  ];
  return (
    <div>
      <TableComponent columns={columns} rows={roles} inputText='Juan' labelText='Filtrar usuario' />

      {openModal && <DeleteRoleModalComponent closeModal={closeModal} roleId={roleSelected!} />}
    </div>
  );
}
