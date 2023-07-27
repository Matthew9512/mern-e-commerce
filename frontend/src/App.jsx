import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Layout } from "./ui/Layout";
import { PageNotFound } from "./ui/PageNotFound";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-screen-2xl bg-neutral-50 text-gray-800">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
};
