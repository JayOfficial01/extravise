import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import { LayoutStyle } from "./Layout.style";

function Layout({ children }) {
  return (
    <LayoutStyle>
      <Navbar />

      <main className="page-content-wrapper">{children}</main>

      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
