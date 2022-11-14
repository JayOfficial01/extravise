import React from "react";
import { motion } from "framer-motion";

import { timelineData } from "../../data/timeline";
import { TimeLineStyle } from "./TimeLine.style";
import Card from "../Card/Card";

function TimeLine() {
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
    <TimeLineStyle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="frammer-wrapper" variants={cardVariants}>
          <article className="timelines">
            {timelineData.map((timeline, index) => (
              <Card
                cardType="timeLineCard"
                {...timeline}
                key={index}
                count={index + 1}
              />
            ))}
          </article>
        </motion.div>
      </motion.div>
    </TimeLineStyle>
  );
}

export default TimeLine;
