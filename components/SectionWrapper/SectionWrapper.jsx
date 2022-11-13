import React from "react";
import { SectionWrapperStyle } from "./SectionWrapper.style";

function SectionWrapper(props) {
  const {
    className,
    heading,
    title,
    description,
    children,
    background,
    center,
  } = props;
  return (
    <SectionWrapperStyle
      className={className}
      bg={background}
      centerAlign={center}
    >
      <article className="section-container">
        <article className="section-header">
          <article className="header-top">
            <h3 className="heading">- {heading}</h3>
            <h2 className="title"> {title}</h2>
          </article>
          {description && <p className="description">{description}</p>}
        </article>

        {children}
      </article>
    </SectionWrapperStyle>
  );
}

export default SectionWrapper;
