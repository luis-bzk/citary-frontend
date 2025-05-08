import styles from './styles.module.css';
import { UserFormComponent } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';

export function CreateUserPage() {
  return (
    <div>
      <AdminHeaderPage title='Crear usuario' />
      <div className={styles.form_container}>
        <UserFormComponent />
      </div>
    </div>
  );
}
