import { DevTool } from '@hookform/devtools';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './styles.module.css';
import { useCreateProvince, useEditProvince } from '@/hooks';
import { ProvinceMapper } from '@/mappers';
import { Alert, InputFormComponent, LoaderMessageComponent, SelectFieldComponent } from '@/components/shared';
import { ProvinceFormValues, schemaProvinceForm } from '@/validators/province';
import { Country, Province } from '@/schemas';

interface Props {
  province?: Province;
  countries: Country[];
}

export function ProvinceFormComponent({ province, countries }: Props) {
  const createHook = useCreateProvince();
  const editHook = useEditProvince();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProvinceFormValues>({
    resolver: zodResolver(schemaProvinceForm),
    defaultValues: {
      name: province?.name || '',
      code: province?.code || '',
      prefix: province?.prefix || '',
      idCountry: province?.idCountry || 9, //default Ecuador
    },
  });

  const onSubmit: SubmitHandler<ProvinceFormValues> = async (values) => {
    const mappedValues = ProvinceMapper.mapFormToApi(values);

    if (province?.id) {
      return editHook.mutate({ id: province.id, data: mappedValues });
    }
    return createHook.mutate(mappedValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.input_container}>
          <InputFormComponent
            label='Nombre'
            inputOptions={{
              name: 'name',
              id: 'name',
              placeholder: 'Azuay',
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
              placeholder: 'azu',
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
              placeholder: '(07)',
              type: 'text',
            }}
            control={control}
            error={errors.prefix}
          />

          <Controller
            name={'idCountry'}
            control={control}
            render={({ field }) => (
              <div className={styles.select_country_container} id='input-idCountry'>
                <SelectFieldComponent
                  label='País'
                  onChange={(val) => {
                    field.onChange(val);
                  }}
                  options={countries.map((c) => ({ label: c.name, value: c.id }))}
                  value={field.value || ''}
                />
                {errors.idCountry && errors.idCountry.message && (
                  <Alert message={`${errors.idCountry.message}`} severity='error' variant='default' />
                )}
              </div>
            )}
          />
        </div>

        <div className={styles.button_container}>
          {createHook.isPending || editHook.isPending ? (
            <LoaderMessageComponent message='Cargando...' />
          ) : (
            <button type='submit' className={styles.submit_button}>
              {province?.id ? 'Actualizar provincia' : 'Crear provincia'}
            </button>
          )}
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}
