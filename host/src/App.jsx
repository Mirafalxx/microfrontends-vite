import React, { lazy } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cards from "./pages/Cards";
import Todos from "./pages/Todos";
import Layout from "./Components/Layout/Layout";
import PDPContent from "pdpRemoteApp/PDPContent";
import CartContent from "cartRemoteApp/CartContent";
import PrivateLayout from "./Components/PrivateLayout/PrivateLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Todos />
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
    path: "/product/:id",
    element: (
      <Layout>
        <PDPContent />
      </Layout>
    ),
  },
  {
    path: "/my-cart",
    element: (
      <PrivateLayout>
        <CartContent />
      </PrivateLayout>
    ),
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
