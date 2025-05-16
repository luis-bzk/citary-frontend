import { useParams } from 'react-router-dom';

import styles from './styles.module.css';
import { RoleFormComponent } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { parseApiError } from '@/errors';
import { useGetRole } from '@/hooks';

export function EditRolePage() {
  const { id = '' } = useParams();
  const { isLoading, isSuccess, isError, error, data } = useGetRole(parseInt(id));

  return (
    <div>
      <AdminHeaderPage title='Actualizar rol' linkPrevious='/admin/administration/roles' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando rol...' />
      ) : isSuccess ? (
        <div className={styles.form_container}>
          <RoleFormComponent role={data} />
        </div>
      ) : isError ? (
        <Alert message={parseApiError(error)!.message} severity='error' variant='default' />
      ) : (
        <Alert message={'Ha ocurrido un error no esperado'} severity='error' variant='default' />
      )}
    </div>
  );
}
