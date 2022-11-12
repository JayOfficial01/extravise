import Image from "next/image";
import React from "react";
import { products } from "../../data/products";

import SiteLogo from "../../public/images/logos/extravis-logo.png";
import { DoubleTickIcon } from "../../svg";
import { CompanyProductsStyle } from "./CompanyProducts.style";

function CompanyProducts() {
  return (
    <CompanyProductsStyle>
      <article className="products-wrapper">
        <picutre className="logo-wrapper">
          <Image src={SiteLogo} alt="Company Logo" />
        </picutre>

        <ul className="products-list">
          {products.map((product, index) => (
            <li key={index}>
              <span className="icon">
                <DoubleTickIcon />
              </span>
              <p className="text">{product}</p>
            </li>
          ))}
        </ul>
      </article>
    </CompanyProductsStyle>
  );
}

export default CompanyProducts;
