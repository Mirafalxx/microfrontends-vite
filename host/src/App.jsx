import React, { lazy } from "react";

import { NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Todos from "./pages/Todos";
import Layout from "./Components/Layout/Layout";
const PDPContent = lazy(() => import("pdpRemoteApp/PDPContent"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/cards",
    element: (
      <Layout>
        <Cards />
      </Layout>
    ),
  },
  {
    path: "/todos",
    element: (
      <Layout>
        <Todos />
      </Layout>
    ),
  },
  {
    path: "/remote-page",
    element: (
      <Layout>
        <div>Full Remote Page</div>
      </Layout>
    ),
  },
  {
    path: "/product/:id",
    element: <PDPContent />,
  },
]);

const App = () => {
  return (
    <div className="mf_application">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
