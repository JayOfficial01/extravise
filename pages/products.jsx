import Head from "next/head";
import React from "react";
import Card from "../components/Card/Card";

import CompanyProducts from "../components/CompanyProducts/CompanyProducts";
import ContactSection from "../components/ContactSection/ContactSection";
import { contactUs, productHeader } from "../data/products";
import { ProductStyle } from "../styles/product.style";

function Products() {
  return (
    <ProductStyle>
      <Head>
        <title>extravise | products</title>
      </Head>

      <header className="product-header">
        <Card cardType="horizontalCard" {...productHeader} />
      </header>
      <CompanyProducts />

      <Card cardType="horizontalCard" {...contactUs} />
      <ContactSection />
    </ProductStyle>
  );
}

export default Products;
