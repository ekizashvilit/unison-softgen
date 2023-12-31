import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@fontsource/firago';
import '@fontsource/firago/400.css';
import '@fontsource/firago/400-italic.css';
import { AppProvider } from './context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
);
