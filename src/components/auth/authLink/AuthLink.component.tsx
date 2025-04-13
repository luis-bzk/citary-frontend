import { Link } from 'react-router-dom';

import styles from './styles.module.css';

interface Props {
  text: string;
  link: string;
  linkText: string;
}

export function AuthLinkComponent({ text, link, linkText }: Props) {
  return (
    <p className={styles.auth_link}>
      <span className={styles.text}>{text}</span>{' '}
      <Link className={styles.link} to={link}>
        {linkText}
      </Link>
    </p>
  );
}
