import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsInstagram, BsTwitter } from "react-icons/bs";

import { menus } from "../../data/menus";
import Logo from "../../public/images/footer-logo.png"
import { MessageIcon } from "../../svg";

import { FooterStyle, MainFooterstyle } from "./Footer.style";

const MainFooter = () => {
  return (
    <MainFooterstyle>
      <article className="footer-container">
        <article className="footer-details">
          <Image src={Logo} alt="site Logo" />

          <p className="description">
            Based in Dubai we work closely with clients from around the world, getting to the heart of their business to develop successful  ideas
          </p>
        </article>

        <article className="footer-menus">
          <h3 className="heading">Useful Links</h3>

          <ul>
            {menus.map((menu, index) => {
              const { url, menuText } = menu
              return (
                <li key={index}>
                  <Link href={url}>{menuText}</Link>
                </li>
              )
            })}
          </ul>
        </article>

        <article className="footer-contact-links">
          <h3 className="heading">Contact links</h3>
          <article className="link">
            <span className="icon"><BsTelephone /></span>
            <p className="text">+971 52 586 2161</p>
          </article>
          <article className="link">
            <span className="icon"><BsEnvelope /></span>
            <p className="text">info@extravis.tech</p>
          </article>
          <article className="link">
            <span className="icon"><BsGeoAlt /></span>
            <p className="text">Dubai, United Arab Emirates</p>
          </article>
        </article>
      </article>

      <article className="footer-bottom">
        <p className="copyright-text"><span>EXTRAVIS</span> © 2022. All rights reserved.</p>

        <article className="social-links">
          <a href="/"><BsInstagram /></a>
          <a href="/"><BsTwitter /></a>
        </article>
      </article>
    </MainFooterstyle>
  )
}

function Footer() {
  return <FooterStyle>
    <article className="subscribe-form-wrapper">
      <h2 className="title">Subscribe to our Newsletter</h2>

      <article className="subscribe-form">
        <article className="form-input">
          <span className="icon"><MessageIcon /></span>
          <input type="email" placeholder="Email Address" />
        </article>

        <button className="submit-button">Submit</button>
      </article>
    </article>

    <MainFooter />
  </FooterStyle>;
}

export default Footer;
