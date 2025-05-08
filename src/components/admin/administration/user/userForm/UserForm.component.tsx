import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { schemaUserForm, UserFormValues } from '@/validators/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputFormComponent } from '@/components/shared';
import { User } from '@/schemas';

interface Props {
  user?: User;
}

export function UserFormComponent({ user }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(schemaUserForm),
    defaultValues: {
      name: user?.id ? user.name : '',
      lastName: user?.id ? user.last_name : '',
      email: user?.id ? user.email : '',
    },
  });

  const onSubmit: SubmitHandler<UserFormValues> = async (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <div className={styles.input_container}>
        <InputFormComponent
          label='Nombre'
          inputOptions={{
            name: 'name',
            id: 'name',
            placeholder: 'Juan',
            type: 'text',
          }}
          control={control}
          error={errors.name}
        />

        <InputFormComponent
          label='Apellido'
          inputOptions={{
            name: 'lastName',
            id: 'lastName',
            placeholder: 'Alvarez',
            type: 'text',
          }}
          control={control}
          error={errors.lastName}
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
      </div>

      <div className={styles.button_container}>
        <button type='submit' className={styles.button_login}>
          Crear usuario
        </button>
      </div>
    </form>
  );
}
