import styles from './styles.module.css';
import { AdminHeaderPage } from '@/components/admin/shared';
import { CountryFormComponent } from '@/components/admin/administration';

export function CreateCountryPage() {
  return (
    <div>
      <AdminHeaderPage title='Crear país' linkPrevious='/admin/location/countries' />

      <div className={styles.form_container}>
        <CountryFormComponent />
      </div>
    </div>
  );
}
