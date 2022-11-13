import Link from "next/link";
import React from "react";

import { CommonCardStyle } from "./Card.style";

function CommonCard(props) {
  const { icon, heading, description, url } = props;
  return (
    <CommonCardStyle>
      <article className="card-header">
        <span className="icon">{icon}</span>
        <h3 className="heading">{heading}</h3>
      </article>

      <p className="card-description">{description}</p>

      {url && <Link href={url}>Read more...</Link>}
    </CommonCardStyle>
  );
}

export default CommonCard;
