import { Alert, LoaderMessageComponent } from '@/components/shared';
import styles from './styles.module.css';
import { useGetAllRoles } from '@/hooks';
import { RolesTable } from '@/components/admin/administration';

export function RolesPage() {
  const { isLoading, isError, error, data } = useGetAllRoles(100, 0);

  return (
    <div>
      <h2 className={styles.title}>Usuarios</h2>

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <RolesTable roles={data!} />
      )}
    </div>
  );
}
