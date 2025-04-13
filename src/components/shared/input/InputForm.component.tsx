import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import { Alert } from '@/components/shared';
import styles from './styles.module.css';

interface InputOptions {
  name: string;
  id: string;
  placeholder: string;
  type: 'text' | 'number' | 'email' | 'password' | 'date';
}

interface Props<T extends FieldValues> {
  label: string;
  inputOptions: InputOptions;
  control: Control<T>;
  error: FieldError | undefined;
  readonly?: boolean;
}

export function InputFormComponent<T extends FieldValues>({
  label,
  inputOptions,
  control,
  error,
  readonly = false,
}: Props<T>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.field_wrapper}>
        <label className={styles.label} htmlFor={inputOptions.id}>
          {label}
        </label>
        <Controller
          name={inputOptions.name as Path<T>}
          control={control}
          render={({ field }) => <input {...field} className={styles.input} {...inputOptions} readOnly={readonly} />}
        />
      </div>
      {error && error.message && <Alert message={error.message} severity='error' variant='default' />}
    </div>
  );
}
