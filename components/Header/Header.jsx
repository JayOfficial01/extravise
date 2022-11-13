import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import BannerImage from "../../public/images/ilustrations/banner-image.png";
import { PrimaryButton } from "../../styles/constant.style";
import { HeaderStyle } from "./Header.style";

function Header() {
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
    <HeaderStyle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <article className="header-container">
            <aritcle className="header-details">
              <h1 className="title">
                Imagine the <br />
                <span>Possibilities</span>
              </h1>

              <p className="description">
                Extravis provides the easiest and fastest way to automate your
                IT processes. Whether it’s simple repetitive tasks, day-to-day
                runbooks, or complex process orchestration...
              </p>

              <article className="button-wrapper">
                <PrimaryButton href="/about">
                  Explore us
                  <span>
                    <BsArrowRight />
                  </span>
                </PrimaryButton>
                <Link href="/contact" className="secondary-button">
                  Contact us
                </Link>
              </article>
            </aritcle>

            <picture className="header-image">
              <Image src={BannerImage} alt="Banner Image" />
            </picture>
          </article>
        </motion.div>
      </motion.div>
    </HeaderStyle>
  );
}

export default Header;
