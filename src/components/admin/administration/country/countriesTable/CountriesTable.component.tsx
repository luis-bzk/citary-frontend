import { useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { RECORD_STATUS } from '@/utils';
import { TableComponent } from '@/components/shared';
import { DeleteCountryModalComponent } from '@/components/admin/administration';
import { ActionButtonsComponent, StatusTagComponent } from '@/components/admin/shared';
import { Country } from '@/schemas';

interface Props {
  countries: Country[];
}

export function CountriesTable({ countries }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [countrySelected, setCountrySelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const deleteCountry = (id: number) => {
    setOpenModal(true);
    setCountrySelected(id);
  };

  const closeModal = () => setOpenModal((state) => !state);

  const columns: ColumnDef<Country>[] = [
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
        const editCountryFn = () => navigate(`/admin/location/countries/edit/${id}`);
        const deleteCountryFn = () => deleteCountry(id);
        return <ActionButtonsComponent onEdit={editCountryFn} onDelete={deleteCountryFn} />;
      },
    },
  ];

  return (
    <div>
      <TableComponent columns={columns} rows={countries} inputText='Ecuador' labelText='Filtrar país' />

      {openModal && <DeleteCountryModalComponent closeModal={closeModal} countryId={countrySelected!} />}
    </div>
  );
}
