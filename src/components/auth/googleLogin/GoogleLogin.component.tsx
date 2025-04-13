import styles from './styles.module.css';
import { FcGoogle } from 'react-icons/fc';

export function GoogleLoginComponent() {
  const fetchGoogleLogin = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/v1/auth/google/login');

      if (!res.ok) {
        const data_error = await res.json();
        return console.log({ data_error });
      }

      const data: { url: string } = await res.json();
      console.log({ data });

      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text_separator}>
        <hr />
        <span>o</span>
        <hr />
      </div>

      <div className={styles.button_container}>
        <button type='button' className={styles.button} onClick={fetchGoogleLogin}>
          <i className={styles.icon}>
            <FcGoogle />
          </i>
          <span>Iniciar con google</span>
        </button>
      </div>
    </div>
  );
}
