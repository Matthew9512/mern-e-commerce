import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import { App } from './App.jsx';
import { ShoppingCartContextProvider } from './context/shoppingCartContex.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ShoppingCartContextProvider>
         <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
         </QueryClientProvider>
      </ShoppingCartContextProvider>
   </React.StrictMode>
);
