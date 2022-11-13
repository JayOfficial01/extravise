import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

import {
  clients,
  ourProduct,
  services,
  whyChooseUs,
  aboutUs,
} from "../data/homeData";

import { ClientsStyle, HomeStyle } from "../styles/home.style";
import TimeLine from "../components/TimeLine/TimeLine";
import Testimonial from "../components/Testimonials/Testimonial";
import ContactSection from "../components/ContactSection/ContactSection";

const Clients = () => {
  return (
    <ClientsStyle>
      <h3 className="heading">Trusted by</h3>

      <article className="logos-wrapper">
        {clients.map((client, index) => (
          <Image
            src={client}
            alt="Client-Logo"
            className="clinet-logo"
            width={70}
            height={60}
            key={index}
          />
        ))}
      </article>
    </ClientsStyle>
  );
};

export default function Home() {
  return (
    <HomeStyle>
      <Head>
        <title>Extravise | Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Clients />
      <Card cardType="horizontalCard" {...aboutUs} />
      <SectionWrapper
        heading="Our Services"
        title="Automate Your Cloud Services"
        description="We help our clients succeed by Automating operations, innovating faster, and making smarter decisions"
        background={true}
        center={true}
      >
        <article className="services-wrapper">
          {services.map((service, index) => (
            <Card cardType="commonCard" {...service} key={index} />
          ))}
        </article>
      </SectionWrapper>
      <Card cardType="horizontalCard" {...whyChooseUs} />
      <Card cardType="horizontalCard" {...ourProduct} />

      <SectionWrapper
        heading="Our Process"
        title="We Simply the Automation Process"
        center={true}
      >
        <TimeLine />
      </SectionWrapper>
      <Testimonial />

      <ContactSection />
    </HomeStyle>
  );
}
