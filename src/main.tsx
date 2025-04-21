import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

import { RouterApp } from '@/pages';
import '@/styles/normalize.css';
import '@/styles/variables.css';
import '@/styles/global.css';
import '@/styles/typography.css';

// create client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterApp />
      <Toaster position='top-center' richColors />
    </QueryClientProvider>
  </StrictMode>
);
