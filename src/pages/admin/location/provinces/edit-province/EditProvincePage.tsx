import styles from './styles.module.css';
import { AdminHeaderPage } from '@/components/admin/shared';
import { ProvinceFormComponent } from '@/components/admin/administration';
import { useGetAllCountries, useGetProvince } from '@/hooks';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { useParams } from 'react-router-dom';

export function EditProvincePage() {
  const { id = '' } = useParams();
  const {
    isLoading: isLoadingProvince,
    isSuccess: isSuccessProvince,
    isError: isErrorProvince,
    error: errorProvince,
    data: dataProvince,
  } = useGetProvince(parseInt(id));

  const { isLoading, isSuccess, isError, error, data } = useGetAllCountries();

  return (
    <div>
      <AdminHeaderPage title='Crear provincia' linkPrevious='/admin/location/provinces' />

      {isLoading || isLoadingProvince ? (
        <LoaderMessageComponent message='Cargando datos...' />
      ) : isSuccess && isSuccessProvince ? (
        <div className={styles.form_container}>
          <ProvinceFormComponent countries={data} province={dataProvince} />
        </div>
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : isErrorProvince ? (
        <Alert message={errorProvince.message} severity='error' variant='default' />
      ) : (
        <Alert message={'Ha ocurrido un error no esperado'} severity='error' variant='default' />
      )}
    </div>
  );
}
