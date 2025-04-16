import { HeaderPageComponent, RecoverPasswordFormComponent } from '@/components/auth';
import styles from './styles.module.css';

export function RecoverPasswordPage() {
  return (
    <div className={styles.page_container}>
      <HeaderPageComponent
        title='Recupera tu contraseña'
        subtitle='Introduce tu correo electrónica para recuperar tu contraseña'
      />

      <RecoverPasswordFormComponent />
    </div>
  );
}
