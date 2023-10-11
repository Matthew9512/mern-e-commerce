import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App.jsx';
import { ShoppingCartContextProvider } from './context/shoppingCartContex.jsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ShoppingCartContextProvider>
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>
      </ShoppingCartContextProvider>
   </React.StrictMode>
);
