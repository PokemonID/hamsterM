import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider  } from './utils/Context';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <CustomProvider >
      <TonConnectUIProvider manifestUrl="https://localhost:3000/tonconnect-manifest.json">
        <App />
      </TonConnectUIProvider>
     </CustomProvider >
    </BrowserRouter>
  </React.StrictMode>,
);
