import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import TitleUpdater from "./components/TitleUpdater.tsx";
import Contact from "./routes/children/Contact.tsx";
import Question from "./routes/children/Question.tsx";
import AboutUs from "./routes/children/AboutUs.tsx";
import TermsPrivacity from "./routes/children/TermsPrivacity.tsx";
import ErrorPage from "./routes/children/ErrorPage.tsx";
import Auth from "./routes/auth/Auth.tsx";
import Dashboard from "./routes/dashboard/pages/Dashboard.tsx";
import Main from "./routes/dashboard/Main.tsx";
import Transactions from "./routes/dashboard/pages/Transactions";
import Config from "./routes/dashboard/pages/Config.tsx";

const Private: React.FC<{ Item: React.ComponentType; title: string }> = ({
  Item,
  title,
}) => {
  const signed: boolean = true;
  const setTitle = signed ? title : "Finance";
  return (
    <>
      <TitleUpdater title={setTitle} />
      {signed ? <Item /> : <Auth />}
    </>
  );
};

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
    element: (
      <>
        <TitleUpdater title="Finance" />
        <Auth />
      </>
    ),
  },
  {
    path: "auth/login",
    element: (
      <>
        <TitleUpdater title="Finance" />
        <Auth />
      </>
    ),
  },
  {
    path: "",
    element: (
      <>
        <Private Item={Main} title="Dashboard - Finance" />
      </>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <>
            <TitleUpdater title="Dashboard - Finance" />
            <Dashboard />
          </>
        ),
      },
      {
        path: "historico-movimentacoes",
        element: (
          <>
            <TitleUpdater title="Historico de movimentações - Finance" />
            <Transactions />
          </>
        ),
      },
      {
        path: "config",
        element: (
          <>
            <TitleUpdater title="Configurações - Finance" />
            <Config />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
