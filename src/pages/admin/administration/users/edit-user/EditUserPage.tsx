import { useParams } from 'react-router-dom';

import styles from './styles.module.css';
import { UserFormComponent } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { parseApiError } from '@/errors';
import { useGetUser } from '@/hooks';

export function EditUserPage() {
  const { id = '' } = useParams();
  const { isLoading, isSuccess, isError, error, data } = useGetUser(parseInt(id));

  return (
    <div>
      <AdminHeaderPage title='Editar usuario' linkPrevious='/admin/administration/users' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando usuario...' />
      ) : isSuccess ? (
        <div className={styles.form_container}>
          <UserFormComponent user={data} />
        </div>
      ) : isError ? (
        <Alert message={parseApiError(error)!.message} severity='error' variant='default' />
      ) : (
        <Alert message={'Ha ocurrido un error no esperado'} severity='error' variant='default' />
      )}
    </div>
  );
}
