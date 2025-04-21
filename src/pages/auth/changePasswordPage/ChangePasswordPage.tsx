import { useParams } from 'react-router-dom';
import { IoShieldCheckmark, IoShapes, IoLockClosed } from 'react-icons/io5';

import { ChangePasswordForm, HeaderPageComponent } from '@/components/auth';
import styles from './styles.module.css';
import { useCheckToken } from '@/hooks/auth';
import { parseApiError } from '@/errors';
import { LoaderMessageComponent } from '@/components/shared';

export function ChangePasswordPage() {
  const { token } = useParams();
  const { isLoading, isError, isSuccess, error } = useCheckToken(token || '');

  const icon = isLoading ? <IoShapes /> : isError ? <IoLockClosed /> : <IoShieldCheckmark />;
  const title = isLoading
    ? 'Estamos validando el enlace'
    : isError
    ? 'Este enlace no es válido o ha expirado'
    : 'Cambia tu contraseña';
  const subtitle = isLoading
    ? 'Un momento por favor...'
    : isError
    ? parseApiError(error)?.message || 'El enlace ya no es válido'
    : 'Completa el formulario y recupera el acceso a tu cuenta';

  return (
    <div className={styles.page_container}>
      <div className={styles.icon_container}>
        <i
          className={`${styles.icon} ${
            isLoading ? styles.icon_loading : isError ? styles.icon_error : styles.icon_success
          }`}
        >
          {icon}
        </i>
      </div>

      <HeaderPageComponent title={title} subtitle={subtitle} />

      {isLoading ? (
        <LoaderMessageComponent message='Verificando enlace...' />
      ) : isSuccess ? (
        <ChangePasswordForm token={token!} />
      ) : null}
    </div>
  );
}
