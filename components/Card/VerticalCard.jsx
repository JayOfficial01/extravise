import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { VerticalCardStyle } from "./Card.style";

function VerticalCard(props) {
  const { image, heading, description, className } = props;

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <VerticalCardStyle className={className}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <picture className="card-image">
            <Image src={image} alt={heading} width={250} height={250} />
          </picture>

          <figcaption>
            <h3 className="heading">{heading}</h3>
            <p className="description">{description}</p>
          </figcaption>
        </motion.div>
      </motion.div>
    </VerticalCardStyle>
  );
}

export default VerticalCard;
