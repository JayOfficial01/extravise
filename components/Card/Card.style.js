import { transform } from "framer-motion";
import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  GirdBox,
  Positioning,
} from "../../styles/constant.style";

export const HorizotalCardStyle = styled.figure`
  background: ${(props) =>
    props.bg ? ({ theme }) => theme.colors.lightGreenColor : "unset"};

  .framer-wrapper {
    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      transform: translateY(0px) translateZ(0) !important;
    }

    .card-container {
      ${GirdBox({ gap: "3rem", align: "center" })};
      ${CustomContainer};
      ${CustomSpacing};

      padding-top: 5rem;
      padding-bottom: 15rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        ${GirdBox({ columns: "1fr" })};
        padding-bottom: 5rem;
      }

      .card-image {
        ${Flexbox({ justify: "center" })};

        order: ${(props) => (props.dir ? 2 : 1)};

        justify-self: center;

        img {
          max-width: 100%;
          height: auto;
        }
      }

      .card-details {
        order: ${(props) => (props.dir ? 1 : 2)};

        .heading {
          color: ${({ theme }) => theme.colors.darkGreenColor};
          font-size: 2rem;
        }

        .title {
          color: ${({ theme }) => theme.colors.blackColor};
          line-height: 5rem;
          padding: 1rem 0;
          font-weight: 700;

          @media (max-width: ${({ theme }) =>
              theme.breakPoints.mediumDevices}) {
            font-size: 3rem;
          }
        }

        .sub-heading {
          color: ${({ theme }) => theme.colors.secondaryColor};

          font-size: 1.5rem;
          padding: 3rem 0 2rem 0;
        }

        .description {
          color: ${({ theme }) => theme.colors.secondaryColor};
          margin-bottom: 3rem;
          line-height: 3.2rem;
        }

        .button-wrapper {
          ${Flexbox({ justify: "flex-start" })};
        }
      }
    }
  }
`;

export const CommonCardStyle = styled.figure`
  padding: 2rem;
  transition: 0.3s all linear;
  border-radius: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.whiteColor};
  }

  .card-header {
    ${Flexbox({ justify: "flex-start", align: "flex-start" })};

    padding-bottom: 2rem;

    .icon {
      ${Flexbox({ justify: "center" })};

      width: 4rem;
      height: 4rem;
      border-radius: 0.3rem;
      background: ${({ theme }) => theme.colors.primaryColor};
      margin-right: 1rem;

      > svg {
        width: 2rem;
        fill: ${({ theme }) => theme.colors.whiteColor};
      }
    }

    .heading {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  .card-description {
    font-size: 1.5rem;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.colors.secondaryColor};
    line-height: 3.2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.darkGreenColor};
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const TimelineCardStyle = styled.figure`
  ${Positioning};

  background: url(${(props) => props.bg}) no-repeat;
  background-position: top center;

  max-width: 40rem;
  width: 100%;

  &:nth-child(odd) {
    float: left;
    clear: right;

    .count {
      ${Positioning({
        position: "absolute",
        top: "10%",
        right: "-10rem",
        transform: "translateY(-10%)",
      })}

      &::after {
        left: 6.5rem;
      }
    }
  }

  &:nth-child(even) {
    float: right;
    clear: left;

    figcaption {
      order: 2;
    }

    .count {
      ${Positioning({
        position: "absolute",
        top: "10%",
        left: "-10rem",
        transform: "translateY(-10%)",
      })};

      order: 1;

      &::after {
        right: 6.5rem;
      }
    }
  }

  .frammer-wrapper {
    @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
      transform: translateY(0px) translateZ(0) !important;
    }

    figcaption {
      .card-heading {
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 1rem;
        font-size: 3.2rem;
      }

      .card-description {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.secondaryColor};
        line-height: 3.2rem;
      }
    }

    .count {
      ${Flexbox({ justify: "center" })};

      background: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.whiteColor};

      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      font-size: 1.9rem;

      z-index: 2;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
        display: none;
      }

      &:after {
        ${Positioning({
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        })};

        content: "";
        width: 4rem;
        height: 0.2rem;
        background: ${({ theme }) => theme.colors.blackColor};
        z-index: -1;

        @media (max-width: ${({ theme }) => theme.breakPoints.desktops}) {
          display: none;
        }
      }
    }
  }
`;

export const VerticalCardStyle = styled.figure`
  .frammer-wrapper {
    @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
      transform: translateY(0px) translateZ(0) !important;
    }

    .card-image {
      display: block;
      text-align: center;
      margin-bottom: 5rem;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    figcaption {
      color: ${({ theme }) => theme.colors.secondaryColor};

      .heading {
        margin-bottom: 1rem;
      }

      .description {
        line-height: 3.2rem;
      }
    }
  }
`;
