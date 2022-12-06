import React from "react";
import { Outlet } from "react-router-dom";
import ClientFooter from "./Footer";
import ClientHeader from "./Header";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <main className="mt-[62px]">
        <Outlet />
      </main>
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
