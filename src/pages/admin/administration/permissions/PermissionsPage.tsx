import { Alert, LoaderMessageComponent } from '@/components/shared';
import styles from './styles.module.css';
import { useGetAllUserRoles } from '@/hooks';
import { UserRolesTable } from '@/components/admin/administration';

export function PermissionsPage() {
  const { isLoading, isError, error, data } = useGetAllUserRoles(100, 0);

  return (
    <div>
      <h2 className={styles.title}>Usuarios</h2>

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <UserRolesTable userRoles={data!} />
      )}
    </div>
  );
}
