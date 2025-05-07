import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { LuPencil, LuTrash2 } from 'react-icons/lu';

import styles from './styles.module.css';
import { User } from '@/schemas';
import { RECORD_STATUS } from '@/utils';
import { TableComponent } from '@/components/shared';
import { DeleteUserModalComponent } from '@/components/admin/administration';

interface Props {
  users: User[];
}

export function UsersTable({ users }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelected] = useState<number | null>(null);

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
        const deleteUserFn = () => deleteUser(id);
        return (
          <div className={styles.action_buttons}>
            <i className={`${styles.action_icon} ${styles.edit}`}>
              <LuPencil />
            </i>

            <i className={`${styles.action_icon} ${styles.delete}`} onClick={deleteUserFn}>
              <LuTrash2 />
            </i>
          </div>
        );
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
