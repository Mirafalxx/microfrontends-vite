import React from "react";
import { Navigate } from "react-router-dom";
import { useLoggedIn } from "cartRemoteApp/cart";
import Header from "../Header/Header";
const PrivateLayout = ({ children }) => {
  const loggedIn = useLoggedIn();

  if (!loggedIn) return <Navigate to="/" replace />;

  return (
    <>
      <Header />
      <div style={{ marginTop: "30px" }}>{children}</div>
    </>
  );
};

export default PrivateLayout;
