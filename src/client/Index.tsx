import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

function WrappedApp(): JSX.Element {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

if (process.env.NODE_ENV === 'development') {
  render(<WrappedApp />, document.getElementById('root'));
} else {
  hydrate(<WrappedApp />, document.getElementById('root'));
}
