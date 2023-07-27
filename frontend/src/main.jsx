import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { App } from './App.jsx';
import './index.css';
import { ErrorFallback } from './ui/ErrorFallback.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ErrorBoundary FallbackComponent={<ErrorFallback />}>
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>
      </ErrorBoundary>
   </React.StrictMode>
);
