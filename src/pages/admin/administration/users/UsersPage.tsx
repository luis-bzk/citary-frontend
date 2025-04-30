// pages/UsersPage.tsx
import { UsersTable } from '@/components/admin/administration';
import { Alert, LoaderMessageComponent } from '@/components/shared';
import { useGetAllUsers } from '@/hooks/user';
import { useState } from 'react';

export function UsersPage() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  const { isLoading, isError, error, data } = useGetAllUsers(limit, offset, search);

  const handleSearch = (value: string) => {
    setSearch(value);
    setOffset(0);
  };

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setOffset(0);
  };

  return (
    <div>
      <h2>Users page works</h2>

      {isLoading ? (
        <LoaderMessageComponent message='Cargando' />
      ) : isError ? (
        <Alert message={error.message} severity='error' variant='default' />
      ) : (
        <UsersTable
          users={data!.users}
          totalCount={data!.totalUsers}
          limit={limit}
          offset={offset}
          onSearch={handleSearch}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      )}
    </div>
  );
}
