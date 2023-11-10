import { BrowserRouter } from 'next/navigation';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;

hydrateRoot(
  container,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
