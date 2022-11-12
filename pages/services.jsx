import Head from "next/head";
import Image from "next/image";
import React from "react";

import Logo from "../public/images/tools/figma.png";

import Card from "../components/Card/Card";
import TimeLine from "../components/TimeLine/TimeLine";
import { services, servicesData, technolagies } from "../data/services";

import { ServicesStyle } from "../styles/services.style";

function Services() {
  return (
    <ServicesStyle>
      <Head>
        <title>Extravise | services</title>
      </Head>

      <header className="services-header">
        <Card cardType="horizontalCard" {...servicesData} />
      </header>

      <article className="services">
        {services.map((service, index) => (
          <Card cardType="verticalCard" {...service} key={index} />
        ))}
      </article>

      <article className="services-timeline">
        <article className="timeline-container">
          <h2 className="heading">We Simply the Automation Process</h2>
          <TimeLine />
        </article>
      </article>

      <article className="technolagies-wrapper">
        <h2 className="title">Technologies and Tools we use</h2>

        <article className="technolagies">
          {technolagies.map((tech, index) => {
            const { heading, tools } = tech;
            return (
              <article className="technolagies-card">
                <h3 className="heading">{heading}</h3>

                <article className="tools-list">
                  {tools.map((tool, index) => {
                    const { icon, name } = tool;
                    return (
                      <article className="tool-card">
                        <Image src={icon} alt="figma" width={15} height={15} />
                        <p className="name">{name}</p>
                      </article>
                    );
                  })}
                </article>
              </article>
            );
          })}
        </article>
      </article>
    </ServicesStyle>
  );
}

export default Services;
