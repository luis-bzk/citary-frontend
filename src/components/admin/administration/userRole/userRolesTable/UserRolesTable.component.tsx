import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';

import { RECORD_STATUS } from '@/utils';
import { Role, User, UserRoleDetail } from '@/schemas';
import { TableComponent } from '@/components/shared';
import { DeleteUserRoleModalComponent } from '@/components/admin/administration';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';

interface Props {
  userRoles: UserRoleDetail[];
}

export function UserRolesTable({ userRoles }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [userRoleSelected, setUserRoleSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const deleteUserRole = (id: number) => {
    setOpenModal(true);
    setUserRoleSelected(id);
  };

  const closeModal = () => setOpenModal((state) => !state);

  const columns: ColumnDef<UserRoleDetail>[] = [
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
        const editUserRoleFn = () => console.log(id);
        const deleteUserRoleFn = () => deleteUserRole(id);
        return <ActionButtonsComponent onEdit={editUserRoleFn} onDelete={deleteUserRoleFn} />;
      },
    },
  ];

  return (
    <div>
      <TableComponent columns={columns} rows={userRoles} inputText='Juan' labelText='Filtrar permiso' />

      {openModal && <DeleteUserRoleModalComponent closeModal={closeModal} userRoleId={userRoleSelected!} />}
    </div>
  );
}
