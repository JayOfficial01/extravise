import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

import { testimonials } from "../../data/testimonials";
import CustomerSurvayImage from "../../public/images/ilustrations/customer-survey.gif";

import {
  SliderNextButtonStyle,
  SliderPrevButtonStyle,
  TestimonialStyle,
} from "./Testimonial.style";

const SliderNextButton = (props) => {
  const { onClick } = props;
  return (
    <SliderNextButtonStyle onClick={onClick}>
      <BsArrowRight />
    </SliderNextButtonStyle>
  );
};

const SliderPrevButton = (props) => {
  const { onClick } = props;
  return (
    <SliderPrevButtonStyle onClick={onClick}>
      <BsArrowLeft />
    </SliderPrevButtonStyle>
  );
};

function Testimonial() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderPrevButton />,
    nextArrow: <SliderNextButton />,
  };

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
    <TestimonialStyle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="frammer-wrapper" variants={cardVariants}>
          <h3 className="heading">- Testimonials</h3>
          <h2 className="title">Hear form our happy clients</h2>

          <article className="testimonial-details">
            <article className="testimonial-slider">
              <article className="testimonials">
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => {
                    const { quote, logo, name, designation } = testimonial;
                    return (
                      <div className="slider" key={index}>
                        <p className="client-saying">
                          <span className="left">&ldquo;</span>
                          {quote}
                          <span className="right">&bdquo; </span>
                        </p>

                        <article className="published-by">
                          <picture className="logo-wrapper">
                            <Image
                              src={logo}
                              alt="Company Logo"
                              width={100}
                              height={50}
                            />
                          </picture>

                          <article className="publisher-details">
                            <h3 className="name">{name}</h3>
                            <p className="designation">{designation}</p>
                          </article>
                        </article>
                      </div>
                    );
                  })}
                </Slider>
              </article>
            </article>

            <picture className="testimonial-image">
              <Image src={CustomerSurvayImage} alt="Customer Survey Image" />
            </picture>
          </article>
        </motion.div>
      </motion.div>
    </TestimonialStyle>
  );
}

export default Testimonial;
