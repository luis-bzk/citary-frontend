import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './styles.module.css';
import { RecoverPasswordFormValues, schemaRecoverPasswordForm } from '@/validators';
import { InputFormComponent } from '@/components/shared';
import { Link } from 'react-router-dom';

export function RecoverPasswordFormComponent() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RecoverPasswordFormValues>({
    resolver: zodResolver(schemaRecoverPasswordForm),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<RecoverPasswordFormValues> = async (values) => {
    console.log(values);
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
      </div>

      <div className={styles.form_links}>
        <Link className={styles.link} to={'/auth'}>
          Cancelar
        </Link>
      </div>

      <div className={styles.button_container}>
        <button type='submit' className={styles.button_login}>
          Enviar correo
        </button>
      </div>
    </form>
  );
}
