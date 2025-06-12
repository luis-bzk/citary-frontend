import { useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { RECORD_STATUS } from '@/utils';
import { TableComponent } from '@/components/shared';
import { DeleteProvinceModalComponent } from '@/components/admin/administration';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';
import { Province } from '@/schemas';

interface Props {
  provinces: Province[];
}

export function ProvincesTable({ provinces }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [provinceSelected, setProvinceSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const deleteProvince = (id: number) => {
    setOpenModal(true);
    setProvinceSelected(id);
  };

  const closeModal = () => setOpenModal((state) => !state);

  const columns: ColumnDef<Province>[] = [
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
      header: 'Código',
      accessorKey: 'code',
      cell: (info) => <span>{info.getValue<string>()}</span>,
    },
    {
      header: 'Prefijos',
      accessorKey: 'prefix',
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
        const editProvinceFn = () => navigate(`/admin/location/provinces/edit/${id}`);
        const deleteProvinceFn = () => deleteProvince(id);
        return <ActionButtonsComponent onEdit={editProvinceFn} onDelete={deleteProvinceFn} />;
      },
    },
  ];

  return (
    <div>
      <TableComponent columns={columns} rows={provinces} inputText='Azuay' labelText='Filtrar provincia' />

      {openModal && <DeleteProvinceModalComponent closeModal={closeModal} provinceId={provinceSelected!} />}
    </div>
  );
}
