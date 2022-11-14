import Head from "next/head";
import React from "react";
import Card from "../components/Card/Card";
import { about, clinets, works } from "../data/aboutData";
import { whyChooseUs } from "../data/homeData";
import { AboutStyle } from "../styles/about.style";
import { ClientIcon } from "../svg";

function About() {
  return (
    <AboutStyle>
      <Head>
        <title>Extravise | About us</title>
      </Head>

      <header className="about-header">
        <Card
          cardType="horizontalCard"
          {...about}
          className="about-header-details"
        />
      </header>

      <article className="clients-section">
        <article className="clinets-container">
          {clinets.map((client, index) => {
            const { icon, heading, description } = client;
            return (
              <article className="client-card">
                <span className="icon-wrapper">{icon}</span>

                <h3 className="heading">{heading}</h3>
                <p className="description">{description}</p>
              </article>
            );
          })}
        </article>
      </article>

      <Card cardType="horizontalCard" {...whyChooseUs} />

      <article className="how-we-work">
        <article className="works-container">
          {works.map((work, index) => (
            <Card
              cardType="commonCard"
              {...work}
              key={index}
              className="perks"
            />
          ))}
        </article>
      </article>
    </AboutStyle>
  );
}

export default About;
