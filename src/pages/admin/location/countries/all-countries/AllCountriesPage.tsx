import { CountriesTable } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { useGetAllCountries } from '@/hooks';

export function AllCountriesPage() {
  const { isLoading, isError, error, data } = useGetAllCountries(100, 0);

  return (
    <div>
      <AdminHeaderPage title='Países' link='/admin/location/countries/create' linkText='Crear país' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <CountriesTable countries={data!} />
      )}
    </div>
  );
}
