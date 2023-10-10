import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Auth from "./routes/Auth.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Contact from "./routes/Contact.tsx";
import Question from "./routes/Question.tsx";
import AboutUs from "./routes/AboutUs.tsx";
import TermsPrivacity from "./routes/TermsPrivacity.tsx";
import TitleUpdater from "./components/TitleUpdater.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <TitleUpdater title="Finance" />
            <Home />
          </>
        ),
      },
      {
        path: "contato",
        element: (
          <>
            <TitleUpdater title="Fale Conosco - Finance" />
            <Contact />
          </>
        ),
      },
      {
        path: "duvidas",
        element: (
          <>
            <TitleUpdater title="Dúvidas Gerais - Finance" />
            <Question />
          </>
        ),
      },
      {
        path: "sobre-nos",
        element: (
          <>
            <TitleUpdater title="Sobre Nós - Finance" />
            <AboutUs />
          </>
        ),
      },
      {
        path: "termos-e-privacidade",
        element: (
          <>
            <TitleUpdater title="Termos e Privacidade - Finance" />
            <TermsPrivacity />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <TitleUpdater title="Página não encontrada! - Finance" />
            <ErrorPage />
          </>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "auth/login",
    element: <Auth />,
  },
  {
    path: "dashboard",
    element: (
      <>
        <TitleUpdater title="Dashboard - Finance" />
        <Dashboard />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
