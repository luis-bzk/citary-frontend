import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './styles.module.css';
import { useCreateCountry, useEditCountry } from '@/hooks';
import { CountryMapper } from '@/mappers';
import { InputFormComponent, LoaderMessageComponent } from '@/components/shared';
import { CountryFormValues, schemaCountryForm } from '@/validators/country';
import { Country } from '@/schemas';

interface Props {
  country?: Country;
}

export function CountryFormComponent({ country }: Props) {
  const createHook = useCreateCountry();
  const editHook = useEditCountry();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CountryFormValues>({
    resolver: zodResolver(schemaCountryForm),
    defaultValues: {
      name: country?.name || '',
      code: country?.code || '',
      prefix: country?.prefix || '',
    },
  });

  const onSubmit: SubmitHandler<CountryFormValues> = async (values) => {
    const mappedValues = CountryMapper.mapFormToApi(values);

    if (country?.id) {
      return editHook.mutate({ id: country.id, data: mappedValues });
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
            placeholder: 'Argentina',
            type: 'text',
          }}
          control={control}
          error={errors.name}
        />

        <InputFormComponent
          label='Código'
          inputOptions={{
            name: 'code',
            id: 'code',
            placeholder: 'AR',
            type: 'text',
          }}
          control={control}
          error={errors.code}
        />

        <InputFormComponent
          label='Prefijo'
          inputOptions={{
            name: 'prefix',
            id: 'prefix',
            placeholder: '+54',
            type: 'text',
          }}
          control={control}
          error={errors.prefix}
        />
      </div>

      <div className={styles.button_container}>
        {createHook.isPending || editHook.isPending ? (
          <LoaderMessageComponent message='Cargando...' />
        ) : (
          <button type='submit' className={styles.submit_button}>
            {country?.id ? 'Actualizar país' : 'Crear país'}
          </button>
        )}
      </div>
    </form>
  );
}
