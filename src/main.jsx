import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { ShoppingCartProvider } from './context/shoppingCart/ShoppingCartProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Router />
    </ShoppingCartProvider>
  </React.StrictMode>
);
