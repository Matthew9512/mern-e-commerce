import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ui/ErrorFallback.jsx";
import "./index.css";
import { ShoppingCartContextProvider } from "./context/shoppingCartContex.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={<ErrorFallback />}>
      <ShoppingCartContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ShoppingCartContextProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
