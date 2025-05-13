import { useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { User } from '@/schemas';
import { RECORD_STATUS } from '@/utils';
import { TableComponent } from '@/components/shared';
import { DeleteUserModalComponent } from '@/components/admin/administration';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';

interface Props {
  users: User[];
}

export function UsersTable({ users }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const deleteUser = (id: number) => {
    setOpenModal(true);
    setUserSelected(id);
  };

  const closeModal = () => setOpenModal((state) => !state);

  const columns: ColumnDef<User>[] = [
    {
      header: 'ID',
      accessorKey: 'id',
      cell: (info) => <span>{info.getValue<number>()}</span>,
    },
    {
      header: 'Nombre completo',
      accessorFn: (row) => `${row.name} ${row.lastname}`,
      id: 'fullName',
      cell: (info) => <span>{info.getValue<string>()}</span>,
    },
    {
      header: 'Correo electrónico',
      accessorKey: 'email',
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
        const editUserFn = () => navigate(`/admin/administration/users/edit/${id}`);
        const deleteUserFn = () => deleteUser(id);
        return <ActionButtonsComponent onEdit={editUserFn} onDelete={deleteUserFn} />;
      },
    },
  ];

  return (
    <div>
      <TableComponent columns={columns} rows={users} inputText='Juan' labelText='Filtrar usuario' />

      {openModal && <DeleteUserModalComponent closeModal={closeModal} userId={userSelected!} />}
    </div>
  );
}
