import styles from './styles.module.css';

interface Props {
  title: string;
  subtitle: string;
}

export function HeaderPageComponent({ title, subtitle }: Props) {
  return (
    <div className={styles.text_info}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
