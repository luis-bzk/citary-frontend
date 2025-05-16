import { AuthLinkComponent, GoogleLoginComponent, HeaderPageComponent, RegisterFormComponent } from '@/components/auth';
import styles from './styles.module.css';

export function RegisterPage() {
  return (
    <div className={styles.page_container}>
      <HeaderPageComponent
        title='Crea una cuenta en Citary'
        subtitle='Completa los campos para registrarte y empezar a agendar citas fácilmente'
      />

      <RegisterFormComponent />

      <GoogleLoginComponent />

      <AuthLinkComponent text='Ya tienes una cuenta?' linkText='Inicia sesión' link='/auth' />
    </div>
  );
}
