import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { InputFormComponent } from '@/components/shared';
import { LoginFormValues, schemaLoginForm } from '@/validators';
import styles from './styles.module.css';
import { useLoginUser } from '@/hooks';
import { LoaderSpinner } from '@/components/svg';

export function LoginFormComponent() {
  const login = useLoginUser();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schemaLoginForm),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    login.mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <div className={styles.input_container}>
        <InputFormComponent
          label='Correo electrónico'
          inputOptions={{
            name: 'email',
            id: 'email',
            placeholder: 'micorreo@gmail.com',
            type: 'email',
          }}
          control={control}
          error={errors.email}
        />

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
      </div>

      <div className={styles.form_links}>
        <Link className={styles.link} to={'/auth/recover-password'}>
          Recuperar contraseña
        </Link>
      </div>

      <div className={styles.button_container}>
        <button type='submit' className={styles.button_login}>
          {login.isPending ? <LoaderSpinner /> : <span>Iniciar sesión</span>}
        </button>
      </div>
    </form>
  );
}
