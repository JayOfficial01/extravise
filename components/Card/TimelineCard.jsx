import React from "react";
import { TimelineCardStyle } from "./Card.style";
import { motion } from "framer-motion";

function TimelineCard(props) {
  const { background, heading, description, count } = props;

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
    <TimelineCardStyle className="timeline-card" bg={background}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <figcaption>
            <h3 className="card-heading">{heading}</h3>
            <p className="card-description">{description}</p>
          </figcaption>

          <article className="count">
            {count.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            })}
          </article>
        </motion.div>
      </motion.div>
    </TimelineCardStyle>
  );
}

export default TimelineCard;
