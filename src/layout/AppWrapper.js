import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export const AppWrapper = ({ children, footerData }) => {
  return (
    <>
      <div id="wrapper">
        <Header />
        <main>{children}</main>
        <Footer footerData={footerData} />
      </div>
    </>
  );
};
