import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { CommonCardStyle } from "./Card.style";

function CommonCard(props) {
  const { icon, heading, description, url } = props;

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
    <CommonCardStyle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <article className="card-header">
            <span className="icon">{icon}</span>
            <h3 className="heading">{heading}</h3>
          </article>

          <p className="card-description">{description}</p>

          {url && <Link href={url}>Read more...</Link>}
        </motion.div>
      </motion.div>
    </CommonCardStyle>
  );
}

export default CommonCard;
