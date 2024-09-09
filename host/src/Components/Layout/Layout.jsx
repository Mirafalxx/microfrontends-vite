import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "30px" }}>{children}</div>
    </>
  );
};

export default Layout;
