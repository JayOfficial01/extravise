import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { HorizotalCardStyle } from "./Card.style";
import { PrimaryButton } from "../../styles/constant.style";

function HorizontalCard(props) {
  const {
    image,
    heading,
    title,
    subHeading,
    description,
    direction,
    background,
    button = {},
    className,
  } = props;
  const { buttonText, url = "#" } = button;

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
    <HorizotalCardStyle dir={direction} bg={background} className={className}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={cardVariants} className="framer-wrapper">
          <article className="card-container">
            <picutre className="card-image">
              <Image src={image} alt="cardImagesss" width={500} height={500} />
            </picutre>

            <figcaption className="card-details">
              {heading && <h3 className="heading">- {heading}</h3>}
              <h2 className="title">{title}</h2>
              {subHeading && <h3 className="sub-heading">{subHeading}</h3>}
              <p className="description">{description}</p>

              <article className="button-wrapper">
                {buttonText && (
                  <PrimaryButton href={url}>
                    {buttonText}
                    <span>
                      <BsArrowRight />
                    </span>
                  </PrimaryButton>
                )}
              </article>
            </figcaption>
          </article>
        </motion.div>
      </motion.div>
    </HorizotalCardStyle>
  );
}

export default HorizontalCard;
