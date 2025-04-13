import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function GoogleCallbackPage() {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      console.log({ token });
    } else {
      console.error('No token found in URL');
    }
  }, [searchParams]);

  return <p>Procesando inicio de sesión...</p>;
}
