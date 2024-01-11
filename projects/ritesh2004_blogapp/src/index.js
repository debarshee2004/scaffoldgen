import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppcontextProvider } from './context/Appcontext';
import { Authprovider } from './context/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authprovider>
      <AppcontextProvider>
        <App />
      </AppcontextProvider>
    </Authprovider>
  </React.StrictMode>
);
