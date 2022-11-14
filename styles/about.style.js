import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  GirdBox,
} from "./constant.style";

export const AboutStyle = styled.section`
  .about-header {
    padding: 10rem 0 5rem 0;
  }

  .clients-section {
    background: url("./images/bg/clients-bg.png") no-repeat;
    background-size: cover;
    padding: 5rem 0;
    margin-bottom: 3rem;

    .clinets-container {
      ${GirdBox({ gap: "10rem" })};
      ${CustomContainer};
      ${CustomSpacing};

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        grid-template-columns: 1fr;
      }

      .client-card {
        ${Flexbox({ justify: "center", direction: "column" })};

        color: ${({ theme }) => theme.colors.whiteColor};
        text-align: center;

        .icon-wrapper {
          ${Flexbox({ justify: "center" })};

          background: ${({ theme }) => theme.gradients.iconGradient};
          padding: 1rem;
          border-radius: 0.8rem;

          > svg {
            width: 3rem;
            fill: ${({ theme }) => theme.colors.whiteColor};
          }
        }

        .heading {
          margin: 1.5rem 0;
        }

        .description {
          line-height: 3.2rem;
        }
      }
    }
  }

  .how-we-work {
    margin-top: 3rem;
    padding: 3rem 0;
    background: ${({ theme }) => theme.colors.lightGreenColor};

    .works-container {
      ${GirdBox({
        columns: "repeat(3, 1fr)",
        gap: "5rem",
        align: "stretch",
      })};
      ${CustomContainer};
      ${CustomSpacing};

      padding-bottom: 7rem;

      .perks {
        &:hover {
          background: unset;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
