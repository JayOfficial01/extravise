import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  Positioning,
} from "../../styles/constant.style";

export const CompanyProductsStyle = styled.article`
  background: url("./images/bg/light-bg.png") no-repeat;
  background-position: top right;

  padding: 4rem 0;

  .products-wrapper {
    ${Positioning};
    ${CustomContainer};
    ${CustomSpacing};

    height: 50rem;

    .logo-wrapper {
      ${Positioning({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      })}
      ${Flexbox({ justify: "center" })};

      padding: 4rem;
      background: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 0px 5px 13px rgba(0, 0, 0, 0.07);
      border-radius: 50%;

      z-index: 2;

      @media (max-width: ${({ theme }) => theme.breakPoints.laptops}) {
        display: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .products-list {
      list-style: none;

      li {
        ${Flexbox({ justify: "flex-start" })};
        ${Positioning({ position: "absolute" })}

        background: ${({ theme }) => theme.colors.whiteColor};
        box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.06);
        border-radius: 1.6rem;
        padding: 1.5rem;

        @media (max-width: ${({ theme }) => theme.breakPoints.laptops}) {
          position: unset;

          margin-bottom: 2rem;
        }

        &:before {
          ${Positioning({ position: "absolute" })};

          content: "";
          width: 23rem;
          height: 0.1rem;
          background: ${({ theme }) => theme.colors.darkGreenColor};

          @media (max-width: ${({ theme }) => theme.breakPoints.laptops}) {
            display: none;
          }
        }

        &:after {
          ${Positioning({ position: "absolute" })};

          content: "";
          background: ${({ theme }) => theme.colors.darkGreenColor};
          width: 1.5rem;
          height: 1.5rem;

          border-radius: 50%;

          @media (max-width: ${({ theme }) => theme.breakPoints.laptops}) {
            display: none;
          }
        }

        &:nth-child(odd) {
          left: 0;

          &:before {
            right: -28rem;
          }

          &:after {
            right: -6rem;
          }
        }

        &:nth-child(even) {
          right: 0;

          &:before {
            left: -28rem;
          }

          &:after {
            left: -6rem;
          }
        }

        &:nth-child(1) {
          left: 20rem;
          top: 5rem;

          &:before {
            transform: rotate(63deg);
            transform-origin: top left;

            @media (max-width: ${({ theme }) =>
                theme.breakPoints.largeDevices}) {
              transform: rotate(75deg);
            }
          }
        }

        &:nth-child(2) {
          right: 20rem;
          top: 5rem;

          &:before {
            transform: rotate(305deg);
            transform-origin: top right;

            @media (max-width: ${({ theme }) =>
                theme.breakPoints.largeDevices}) {
              transform: rotate(290deg);
            }
          }
        }

        &:nth-child(3) {
          top: 15rem;

          &:before {
            transform: rotate(15deg);
            transform-origin: top left;
          }
        }

        &:nth-child(4) {
          top: 15rem;

          &:before {
            transform: rotate(345deg);
            transform-origin: top right;
          }
        }

        &:nth-child(5) {
          top: 30rem;

          &:before {
            transform: rotate(349deg);
            transform-origin: top left;
          }
        }

        &:nth-child(6) {
          top: 30rem;

          &:before {
            transform: rotate(12deg);
            transform-origin: top right;
          }
        }

        &:nth-child(7) {
          left: 20rem;
          top: 40rem;

          &:before {
            transform: rotate(290deg);
            transform-origin: top left;

            @media (max-width: ${({ theme }) =>
                theme.breakPoints.largeDevices}) {
              transform: rotate(273deg);
            }
          }
        }

        &:nth-child(8) {
          right: 20rem;
          top: 40rem;

          &:before {
            transform: rotate(60deg);
            transform-origin: top right;

            @media (max-width: ${({ theme }) =>
                theme.breakPoints.largeDevices}) {
              transform: rotate(83deg);
            }
          }
        }

        span {
          margin-right: 2rem;

          > svg {
            width: 2rem;
          }
        }
      }
    }
  }
`;
