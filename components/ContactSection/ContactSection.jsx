import Image from "next/image";
import React from "react";

import DashboardImage from "../../public/images/ilustrations/form.png";
import ContactForm from "../ContactForm/ContactForm";

import { ContactSectionStyle } from "./ContactSection.style";

function ContactSection() {
  return (
    <ContactSectionStyle>
      <article className="contact-container">
        <h2 className="heading">
          We are ready to grow <br /> your business
        </h2>

        <article className="contact-wrapper">
          <picture className="contact-image-wrapper">
            <Image src={DashboardImage} alt="dashboard Image" />
          </picture>
          <ContactForm />
        </article>
      </article>
    </ContactSectionStyle>
  );
}

export default ContactSection;
