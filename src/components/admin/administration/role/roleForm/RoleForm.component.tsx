import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './styles.module.css';
import { Role } from '@/schemas';
import { RoleMapper } from '@/mappers';
import { useCreateRole, useEditRole } from '@/hooks';
import { RoleFormValues, schemaRoleForm } from '@/validators/role';
import { InputFormComponent, LoaderMessageComponent } from '@/components/shared';

interface Props {
  role?: Role;
}

export function RoleFormComponent({ role }: Props) {
  const createHook = useCreateRole();
  const editHook = useEditRole();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoleFormValues>({
    resolver: zodResolver(schemaRoleForm),
    defaultValues: {
      name: role?.id ? role.name : '',
      description: role?.id ? role.description : '',
    },
  });

  const onSubmit: SubmitHandler<RoleFormValues> = async (values) => {
    const mappedValues = RoleMapper.mapFormToApi(values);
    if (role?.id) {
      return editHook.mutate({ id: role.id, data: mappedValues });
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
            placeholder: 'administrador',
            type: 'text',
          }}
          control={control}
          error={errors.name}
        />

        <InputFormComponent
          label='Descripción'
          inputOptions={{
            name: 'description',
            id: 'description',
            placeholder: 'rol dedicado a la administración',
            type: 'text',
          }}
          control={control}
          error={errors.description}
        />
      </div>

      <div className={styles.button_container}>
        {createHook.isPending || editHook.isPending ? (
          <LoaderMessageComponent message='Cargando...' />
        ) : (
          <button type='submit' className={styles.button_create}>
            {role?.id ? 'Actualizar rol' : 'Crear rol'}
          </button>
        )}
      </div>
    </form>
  );
}
