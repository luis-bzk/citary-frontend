import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterApp } from '@/pages';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
