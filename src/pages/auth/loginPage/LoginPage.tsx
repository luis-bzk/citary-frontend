import { AuthLinkComponent, GoogleLoginComponent, HeaderPageComponent, LoginFormComponent } from '@/components/auth';
import styles from './styles.module.css';

export function LoginPage() {
  return (
    <div className={styles.page_container}>
      <HeaderPageComponent
        title='Bienvenido de vuelta a My Appointments'
        subtitle='Introduce tu usuario y contraseña para continuar'
      />

      <LoginFormComponent />

      <GoogleLoginComponent />

      <AuthLinkComponent text='No tienes una cuenta?' linkText='Regístrate' link='/auth/register' />
    </div>
  );
}
