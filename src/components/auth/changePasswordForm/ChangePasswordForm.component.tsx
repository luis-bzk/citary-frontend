import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './styles.module.css';
import { ChangePasswordFormValues, schemaChangePasswordForm } from '@/validators';
import { useChangePassword } from '@/hooks';
import { LoaderSpinner } from '@/components/svg';
import { InputFormComponent } from '@/components/shared';
import { Link } from 'react-router-dom';
import { AuthButtonComponent } from '@/components/auth';

interface Props {
  token: string;
}

export function ChangePasswordForm({ token }: Props) {
  const authHook = useChangePassword();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(schemaChangePasswordForm),
    defaultValues: {
      password: '',
      verifyPassword: '',
    },
  });

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = async (values) => {
    authHook.mutate({ password: values.password, token: token });
  };

  return authHook.isSuccess ? (
    <div className={styles.button_container}>
      <Link to='/auth' className={styles.button_login}>
        Iniciar sesión
      </Link>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <div className={styles.input_container}>
        <InputFormComponent
          label='Contraseña'
          inputOptions={{
            name: 'password',
            id: 'password',
            placeholder: '*******',
            type: 'password',
          }}
          control={control}
          error={errors.password}
        />

        <InputFormComponent
          label='Verifica tu contraseña'
          inputOptions={{
            name: 'verifyPassword',
            id: 'verifyPassword',
            placeholder: '*******',
            type: 'password',
          }}
          control={control}
          error={errors.verifyPassword}
        />
      </div>

      <div className={styles.button_container}>
        <AuthButtonComponent>
          {authHook.isPending ? <LoaderSpinner /> : <span>Cambiar mi contraseña</span>}
        </AuthButtonComponent>
      </div>
    </form>
  );
}
