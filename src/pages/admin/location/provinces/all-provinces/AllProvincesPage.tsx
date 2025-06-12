import { ProvincesTable } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { useGetAllProvinces } from '@/hooks';

export function AllProvincesPage() {
  const { isLoading, isError, error, data } = useGetAllProvinces(50, 0);

  return (
    <div>
      <AdminHeaderPage title='Provincias' link='/admin/location/provinces/create' linkText='Crear provincia' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <ProvincesTable provinces={data!} />
      )}
    </div>
  );
}
