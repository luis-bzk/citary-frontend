import { useGetAllUsers } from '@/hooks';
import { AdminHeaderPage } from '@/components/admin/shared';
import { UsersTable } from '@/components/admin/administration';
import { Alert, LoaderMessageComponent } from '@/components/shared';

export function AllUsersPage() {
  const { isLoading, isError, error, data } = useGetAllUsers(100, 0);

  return (
    <div>
      <AdminHeaderPage title='Usuarios' link='/admin/administration/users/create' linkText='Crear usuario' />

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
