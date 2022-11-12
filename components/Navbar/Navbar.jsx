import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/images/logo.png";
import { menus } from "../../data/menus";

import { NavbarStyle } from "./Navbar.style";
import { useRouter } from "next/router";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [bgActive, setBgActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setBgActive(false);
      } else {
        setBgActive(true);
      }
    });
  }, []);

  return (
    <NavbarStyle bgActive={bgActive}>
      <article className="nav-container">
        <Link href="/" className="site-logo">
          <Image src={Logo} alt="Site Logo" />
        </Link>

        <article
          className={classNames({
            "toggle-button": true,
            "menu-active": menuActive,
          })}
          onClick={() => {
            setBgActive(true);
            setMenuActive(!menuActive);
          }}
        >
          <article></article>
          <article></article>
          <article></article>
        </article>

        <article
          className={classNames({
            "menu-section": true,
            "dropdown-active": menuActive,
          })}
        >
          <ul className="menus-wrapper">
            {menus.map((menu, index) => {
              const { url, menuText } = menu;

              return (
                <li className="menu-item" key={index}>
                  <Link
                    href={url}
                    className={classNames({
                      "menu-item-link": true,
                      "menu-active": router.pathname == url,
                    })}
                    onClick={() => {
                      setBgActive(false);
                      setMenuActive(false);
                    }}
                  >
                    {menuText}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="https://console.nets-x-map.com/monetx"
            target="_blank"
            className="get-demo-button"
          >
            Register Now
          </Link>
        </article>
      </article>
    </NavbarStyle>
  );
}

export default Navbar;
