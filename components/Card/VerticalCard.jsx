import Image from "next/image";
import React from "react";

import CardImage from "../../public/images/ilustrations/blockchain.png";

import { VerticalCardStyle } from "./Card.style";

function VerticalCard(props) {
  const { image, heading, description, className } = props;
  return (
    <VerticalCardStyle className={className}>
      <picture className="card-image">
        <Image src={image} alt={heading} width={250} height={250} />
      </picture>

      <figcaption>
        <h3 className="heading">{heading}</h3>
        <p className="description">{description}</p>
      </figcaption>
    </VerticalCardStyle>
  );
}

export default VerticalCard;
