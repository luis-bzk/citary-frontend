import styles from './styles.module.css';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { UsersTable } from '@/components/admin/administration';
import { useGetAllUsers } from '@/hooks';

export function UsersPage() {
  const { isLoading, isError, error, data } = useGetAllUsers(100, 0);

  return (
    <div>
      <h2 className={styles.title}>Usuarios</h2>

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <UsersTable users={data!.users} />
      )}
    </div>
  );
}
