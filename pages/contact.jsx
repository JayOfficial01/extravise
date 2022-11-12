import Image from "next/image";
import React from "react";
import {
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsFillGeoAltFill,
} from "react-icons/bs";

import Map from "../public/images/map.png";
import ContactForm from "../components/ContactForm/ContactForm";
import { ContactStyle } from "../styles/contact.style";

function Contact() {
  return (
    <ContactStyle>
      <article className="contact-container">
        <article className="details">
          <h2 className="title">Get in touch</h2>
          <p className="description">
            We are here to answer any question you may have. Feel free to reach
            via contact form.
          </p>

          <ul className="contact-list">
            <li>
              <span className="icon">
                <BsTelephone />
              </span>
              <p className="text">+971 52 586 2161</p>
            </li>
            <li>
              <span className="icon">
                <BsEnvelope />
              </span>
              <p className="text"> info@extravis.tech</p>
            </li>
            <li>
              <span className="icon">
                <BsGeoAlt />
              </span>
              <p className="text">Dubai, United Arab Emirates</p>
            </li>
          </ul>

          <h3 className="heading">Business Hours</h3>
          <p className="timing">
            Mon – Fri : 9am – 6pm <br /> Sat – Sun : Closed
          </p>
        </article>

        <ContactForm className="contact-form" />
      </article>

      <article className="map-wrapper">
        <span className="icon">
          <BsFillGeoAltFill />
        </span>

        <Image src={Map} alt="Company Location" />
      </article>
    </ContactStyle>
  );
}

export default Contact;
