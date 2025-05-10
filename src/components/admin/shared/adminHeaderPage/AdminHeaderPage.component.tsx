import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import { LuChevronLeft, LuFilePlus } from 'react-icons/lu';

interface Props {
  title: string;
  linkPrevious?: string;
  link?: string;
  linkText?: string;
}

export function AdminHeaderPage({ title, linkPrevious, link, linkText }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.previous}>
        {linkPrevious && (
          <Link to={linkPrevious} className={styles.link_previous}>
            <i className={styles.icon_previous}>
              <LuChevronLeft />
            </i>
          </Link>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>

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
