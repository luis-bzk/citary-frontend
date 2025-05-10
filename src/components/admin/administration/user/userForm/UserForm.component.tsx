import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { schemaUserForm, UserFormValues } from '@/validators/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputFormComponent, LoaderMessageComponent } from '@/components/shared';
import { User } from '@/schemas';
import { useCreateUser, useEditUser } from '@/hooks';
import { UserMapper } from '@/mappers';

interface Props {
  user?: User;
}

export function UserFormComponent({ user }: Props) {
  const createHook = useCreateUser();
  const editHook = useEditUser();
  console.log({ user });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(schemaUserForm),
    defaultValues: {
      name: user?.id ? user.name : '',
      lastname: user?.id ? user.lastname : '',
      email: user?.id ? user.email : '',
    },
  });

  const onSubmit: SubmitHandler<UserFormValues> = async (values) => {
    const mappedValues = UserMapper.mapFormToApi(values);
    if (user?.id) {
      return editHook.mutate({ id: user.id, data: mappedValues });
    }
    return createHook.mutate(mappedValues);
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
            name: 'lastname',
            id: 'lastname',
            placeholder: 'Alvarez',
            type: 'text',
          }}
          control={control}
          error={errors.lastname}
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
        {createHook.isPending || editHook.isPending ? (
          <LoaderMessageComponent message='Cargando...' />
        ) : (
          <button type='submit' className={styles.button_login}>
            {user?.id ? 'Actualizar usuario' : 'Crear usuario'}
          </button>
        )}
      </div>
    </form>
  );
}
