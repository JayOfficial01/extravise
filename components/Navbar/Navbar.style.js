import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  Positioning,
} from "../../styles/constant.style";

export const NavbarStyle = styled.nav`
  ${Positioning({ position: "fixed", top: "0", left: "0" })}
  padding: 2rem 0;
  width: 100%;

  z-index: 10;

  backdrop-filter: ${(props) =>
    props.bgActive ? "saturate(180%) blur(20px);" : "unset"};
  background: ${(props) =>
    props.bgActive ? "rgba(205, 255, 198, 0.7);" : "unset"};

  .nav-container {
    ${Flexbox};
    ${Positioning};
    ${CustomContainer};
    ${CustomSpacing};

    .site-logo {
      ${Flexbox};

      img {
        max-width: 100%;
        height: auto;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          width: 10rem;
          height: 2rem;
        }
      }
    }

    .toggle-button {
      ${Positioning};

      display: none;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        ${Flexbox({ direction: "column" })};
      }

      &.menu-active {
        article {
          transition: 0.3s all linear;
          &:first-child {
            display: none;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:last-child {
            transform: translateY(-0.55rem) rotate(-45deg);
          }
        }
      }

      article {
        background: ${({ theme }) => theme.colors.secondaryColor};
        content: "";
        width: 2rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        border-radius: 0.3rem;
      }
    }

    .menu-section {
      ${Flexbox({ justify: "space-evenly" })};

      flex: 1;
      transition: 0.3s all linear;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        ${Positioning({ position: "fixed", top: "6rem", left: "0" })}
        ${Flexbox({ direction: "column", justify: "flex-start" })};

        width: 100%;
        height: 0;
        overflow: hidden;
        opacity: 0;
        background: ${({ theme }) => theme.colors.whiteColor};
        border-top: 0.2rem solid ${({ theme }) => theme.colors.primaryColor};
        padding: 2rem;

        &.dropdown-active {
          height: 100vh;
          opacity: 1;
        }
      }

      .menus-wrapper {
        ${Flexbox};

        list-style: none;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          ${Flexbox({ direction: "column" })};
        }

        .menu-item {
          .menu-item-link {
            color: ${({ theme }) => theme.colors.blackColor};

            padding: 1rem 3rem;
            font-size: 1.6rem;
            font-weight: 600;
            transition: 0.3s all linear;

            @media (max-width: ${({ theme }) =>
                theme.breakPoints.mediumDevices}) {
              display: block;
              padding: 0.8rem 0;
              font-size: 1.7rem;
              margin-bottom: 2rem;
            }

            &:hover {
              color: ${({ theme }) => theme.colors.primaryColor};
            }

            &.menu-active {
              ${Positioning};

              color: ${({ theme }) => theme.colors.primaryColor};

              &:after {
                ${Positioning({
                  position: "absolute",
                  bottom: "0",
                  left: "3rem",
                })};

                content: "";
                width: 2rem;
                height: 0.3rem;
                background: ${({ theme }) => theme.colors.primaryColor};
              }
            }
          }
        }
      }

      .get-demo-button {
        background: ${({ theme }) => theme.gradients.primaryGradient};
        color: ${({ theme }) => theme.colors.whiteColor};

        border-radius: 0.4rem;
        padding: 1rem 2rem;
        font-size: 1.3rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.whiteColor};

        cursor: pointer;
        transition: 0.3s all linear;

        &:hover {
          background: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }
  }
`;
