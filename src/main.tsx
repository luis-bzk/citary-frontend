import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterApp } from '@/pages';
import '@/styles/normalize.css';
import '@/styles/variables.css';
import '@/styles/global.css';
import '@/styles/typography.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
