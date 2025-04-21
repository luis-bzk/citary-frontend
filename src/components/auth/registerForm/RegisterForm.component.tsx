import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputFormComponent } from '@/components/shared';
import { RegisterFormValues, schemaRegisterForm } from '@/validators';
import styles from './component.module.css';
import { useRegisterUser } from '@/hooks/auth';
import { LoaderSpinner } from '@/components/svg';

export function RegisterFormComponent() {
  const register = useRegisterUser();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schemaRegisterForm),
    defaultValues: {
      name: '',
      last_name: '',
      email: '',
      password: '',
      verifyPassword: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    register.mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <div className={styles.input_container}>
        <InputFormComponent
          label='Nombre'
          inputOptions={{
            name: 'name',
            id: 'name',
            placeholder: 'John',
            type: 'text',
          }}
          control={control}
          error={errors.name}
        />
        <InputFormComponent
          label='Apellido'
          inputOptions={{
            name: 'last_name',
            id: 'last_name',
            placeholder: 'Doe',
            type: 'text',
          }}
          control={control}
          error={errors.last_name}
        />
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
        <button type='submit' className={styles.button_login}>
          {register.isPending ? <LoaderSpinner /> : <span>Registrarse</span>}
        </button>
      </div>
    </form>
  );
}
