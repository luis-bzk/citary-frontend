import { Link, useParams } from 'react-router-dom';
import { IoShieldCheckmark, IoShapes, IoLockClosed } from 'react-icons/io5';

import styles from './styles.module.css';
import { HeaderPageComponent } from '@/components/auth';
import { useConfirmUser } from '@/hooks';
import { LoaderMessageComponent } from '@/components/shared';
import { parseApiError } from '@/errors';

export function VerifyAccountPage() {
  const { token } = useParams();
  const { isLoading, isError, error } = useConfirmUser(token || '');

  const icon = isLoading ? <IoShapes /> : isError ? <IoLockClosed /> : <IoShieldCheckmark />;
  const title = isLoading
    ? 'Estamos verificando tu cuenta'
    : isError
    ? 'No hemos podido verificar tu cuenta'
    : 'Tu cuenta ha sido verificada';
  const subtitle = isLoading
    ? 'Esto tardará solo unos segundos'
    : isError
    ? parseApiError(error)?.message || 'Ha ocurrido un error'
    : 'Hemos verificado tu cuenta correctamente. Inicia sesión para continuar.';
  const buttonText = isError ? 'Volver' : 'Iniciar sesión';

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
        <LoaderMessageComponent message='Verificando...' />
      ) : (
        <div className={styles.button_container}>
          <Link to='/auth' className={styles.button_login}>
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}
