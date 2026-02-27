import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Catalogo from "../pages/Catalogo/Catalogo";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound";

/**
 * Configuração de rotas do app.
 * Layout envolve todas as páginas com Header + Footer.
 */
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalogo", element: <Catalogo /> },
      { path: "/sobre", element: <About /> },
      { path: "/contato", element: <About /> }, // placeholder
      { path: "*", element: <NotFound /> },
    ],
  },
]);
