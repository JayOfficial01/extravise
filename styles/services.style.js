import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  GirdBox,
} from "./constant.style";

export const ServicesStyle = styled.section`
  .services-header {
    background: url("./images/bg/services-bg.png") no-repeat;
    background-position: top left;

    padding: 5rem 0 2rem 0;
  }

  .services {
    ${GirdBox({ gap: "10rem 19rem" })};
    ${CustomContainer};
    ${CustomSpacing};

    padding-bottom: 15rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      grid-template-columns: 1fr;
      padding-bottom: 5rem;
    }
  }

  .services-timeline {
    background: url("./images/bg/timeline-bg.png") no-repeat;
    background-size: cover;
    padding: 10rem 0 15rem 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      padding-bottom: 5rem;
    }

    .timeline-container {
      ${CustomContainer};
      ${CustomSpacing};

      .heading {
        text-align: center;
      }
    }
  }

  .technolagies-wrapper {
    ${CustomContainer};
    ${CustomSpacing};

    padding: 5rem 1.5rem 0 1.5rem;

    .title {
      text-align: center;
      margin-bottom: 4rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
        font-size: 3rem;
      }
    }

    .technolagies {
      margin-top: 10rem;

      .technolagies-card {
        ${GirdBox({ columns: "1fr 2fr" })};

        margin-bottom: 8rem;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          grid-template-columns: 1fr;
        }

        .tools-list {
          ${Flexbox({ justify: "flex-start" })};

          flex-wrap: wrap;
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.silverColor};

          .tool-card {
            ${Flexbox({ justify: "flex-start" })};

            background: ${({ theme }) => theme.colors.dewColor};
            margin: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;

            img {
              max-width: 100%;
              height: auto;
            }

            p {
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
`;
