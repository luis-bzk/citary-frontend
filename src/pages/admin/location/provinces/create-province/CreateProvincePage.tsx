import styles from './styles.module.css';
import { AdminHeaderPage } from '@/components/admin/shared';
import { ProvinceFormComponent } from '@/components/admin/administration';
import { useGetAllCountries } from '@/hooks';
import { Alert, LoaderMessageComponent } from '@/components/shared';

export function CreateProvincePage() {
  const { isLoading, isSuccess, isError, error, data } = useGetAllCountries();

  return (
    <div>
      <AdminHeaderPage title='Crear provincia' linkPrevious='/admin/location/provinces' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando países...' />
      ) : isSuccess ? (
        <div className={styles.form_container}>
          <ProvinceFormComponent countries={data} />
        </div>
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <Alert message={'Ha ocurrido un error no esperado'} severity='error' variant='default' />
      )}
    </div>
  );
}
