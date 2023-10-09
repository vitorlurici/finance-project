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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contato",
        element: <Contact />,
      },
      {
        path: "duvidas",
        element: <Question />,
      },
      {
        path: "sobre-nos",
        element: <AboutUs />,
      },
      {
        path: "termos-e-privacidade",
        element: <TermsPrivacity />,
      },
      {
        path: "*",
        element: <ErrorPage />,
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
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
