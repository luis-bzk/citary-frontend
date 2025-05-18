import { Alert, LoaderMessageComponent } from '@/components/shared';
import { useGetAllUserRoles } from '@/hooks';
import { UserRolesTable } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';

export function PermissionsPage() {
  const { isLoading, isError, error, data } = useGetAllUserRoles(100, 0);

  return (
    <div>
      <AdminHeaderPage title='Permisos' />

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <UserRolesTable userRoles={data!.userRoles!} />
      )}
    </div>
  );
}
