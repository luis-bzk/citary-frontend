import Select, { SingleValue } from 'react-select';

import styles from './styles.module.css';

interface ISelectOption {
  value: string | number;
  label: string;
}

interface Props {
  label: string;
  options: ISelectOption[];
  value: string | number;
  onChange: (val: string | number) => void;
  disable?: boolean;
  orderValues?: boolean;
}

export function SelectFieldComponent({ label, options, value, onChange, disable = false, orderValues = true }: Props) {
  const handleChange = (selectedOption: SingleValue<ISelectOption>) => {
    onChange(selectedOption?.value || '');
  };

  const orderedOptions = orderValues ? options.sort((a, b) => a.label.localeCompare(b.label)) : options;

  return (
    <div className={styles.wrapper}>
      <div className={styles.field_wrapper}>
        <label className={styles.label}>{label}</label>

        <Select<ISelectOption>
          classNamePrefix='select'
          className={styles.select}
          value={options.find((opt) => opt.value === value) || null}
          isClearable={true}
          isSearchable={true}
          onChange={handleChange}
          options={orderedOptions}
          isDisabled={disable}
          placeholder={'Selecciona una opción'}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'var(--color-primary-light)',
              primary: 'var(--color-primary)',
            },
          })}
          styles={{
            singleValue: (provided) => ({
              ...provided,
              whiteSpace: 'normal',
              overflow: 'visible',
              color: 'var(--color-text)',
            }),
            control: (provided) => ({
              ...provided,
              minHeight: '42px',
              backgroundColor: 'transparent',
              borderColor: 'var(--color-surface-border)',
              boxShadow: 'none',
              borderRadius: '6px',
            }),
            option: (provided) => ({
              ...provided,
              whiteSpace: 'normal',
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: '#1e1e1e',
            }),
            menuList: (provided) => ({
              ...provided,
              backgroundColor: 'var(--color-bg)',
            }),
            placeholder: (provided) => ({
              ...provided,
              color: 'var(--color-text-placeholder)',
            }),
          }}
        />
      </div>
    </div>
  );
}
