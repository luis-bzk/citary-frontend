import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import { LuFilePlus } from 'react-icons/lu';

interface Props {
  title: string;
  link?: string;
  linkText?: string;
}

export function AdminHeaderPage({ title, link, linkText }: Props) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>

      {link && (
        <Link to={link} className={styles.link}>
          <span>{linkText}</span>

          <i className={styles.icon}>
            <LuFilePlus />
          </i>
        </Link>
      )}
    </header>
  );
}
