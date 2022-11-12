import React from "react";

import { DollarIcon, MessageIcon, SubjectIcon, UserIcon } from "../../svg";
import { ContactFormStyle } from "./ContactForm.style";

function ContactForm({ className }) {
  return (
    <ContactFormStyle className={className}>
      <article className="form-input-fields">
        <article className="form-input">
          <span className="icon">
            <UserIcon />
          </span>
          <input type="text" placeholder="Name" />
        </article>
        <article className="form-input">
          <span className="icon">
            <MessageIcon />
          </span>
          <input type="email" placeholder="Email" />
        </article>
        <article className="form-input">
          <span className="icon">
            <SubjectIcon />
          </span>
          <input type="text" placeholder="Subject" />
        </article>
        <article className="form-input">
          <span className="icon">
            <DollarIcon />
          </span>
          <input type="text" placeholder="Budget" />
        </article>
        <article className="form-input">
          <textarea
            cols="30"
            rows="10"
            className="message-input"
            placeholder="Your Message"
          ></textarea>
        </article>
      </article>

      <button className="submit-button">Submit</button>
    </ContactFormStyle>
  );
}

export default ContactForm;
