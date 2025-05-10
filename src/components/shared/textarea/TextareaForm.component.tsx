import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';

import styles from './component.module.css';
import { Alert } from '@/components/shared';

interface InputOptions {
  name: string;
  id: string;
  placeholder: string;
}

interface Props<T extends FieldValues> {
  label: string;
  inputOptions: InputOptions;
  control: Control<T>;
  error: FieldError | undefined;
  minHeight?: string;
}

export function TextareaForm<T extends FieldValues>({
  label,
  inputOptions,
  control,
  error,
  minHeight = '48px',
}: Props<T>) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full flex flex-col gap-1.5'>
        <label className='text-slate-700 text-sm font-medium' htmlFor={inputOptions.id}>
          {label}
        </label>
        <Controller
          name={inputOptions.name as Path<T>}
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className={`w-full outline-none rounded-md p-2 bg-white placeholder:italic placeholder:text-zinc-500 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-left ${styles.textarea}`}
              style={{ minHeight: minHeight }}
              {...inputOptions}
            />
          )}
        />
      </div>
      {error && error.message && <Alert message={error.message} severity='error' variant='default' />}
    </div>
  );
}
