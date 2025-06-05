import { useParams } from 'react-router-dom';

import styles from './styles.module.css';
import { useGetCountry } from '@/hooks';
import { CountryFormComponent } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';
import { Alert, LoaderMessageComponent } from '@/components/shared';

export function EditCountryPage() {
  const { id = '' } = useParams();
  const { isLoading, isSuccess, isError, error, data } = useGetCountry(parseInt(id));

  return (
    <div>
      <AdminHeaderPage title='Editar país' linkPrevious='/admin/location/countries' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando país...' />
      ) : isSuccess ? (
        <div className={styles.form_container}>
          <CountryFormComponent country={data} />
        </div>
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <Alert message={'Ha ocurrido un error no esperado'} severity='error' variant='default' />
      )}
    </div>
  );
}
