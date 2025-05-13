import { Alert, LoaderMessageComponent } from '@/components/shared';
import { useGetAllRoles } from '@/hooks';
import { RolesTable } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';

export function AllRolesPage() {
  const { isLoading, isError, error, data } = useGetAllRoles(100, 0);

  return (
    <div>
      <AdminHeaderPage title='Roles' link='/admin/administration/roles/create' linkText='Crear rol' />

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
