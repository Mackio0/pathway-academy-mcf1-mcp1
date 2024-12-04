import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ContainerComponent from "./ContainerComponent";

const Layout = () => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />

      <Outlet />

      <Footer />
    </main>
  );
};

export default Layout;
