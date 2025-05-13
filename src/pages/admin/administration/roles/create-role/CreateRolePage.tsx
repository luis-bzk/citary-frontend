import styles from './styles.module.css';
import { RoleFormComponent } from '@/components/admin/administration';
import { AdminHeaderPage } from '@/components/admin/shared';

export function CreateRolePage() {
  return (
    <div>
      <AdminHeaderPage title='Crear rol' linkPrevious='/admin/administration/roles' />

      <div className={styles.form_container}>
        <RoleFormComponent />
      </div>
    </div>
  );
}
