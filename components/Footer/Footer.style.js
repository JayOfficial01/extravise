import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  GirdBox,
} from "../../styles/constant.style";

export const FooterStyle = styled.footer`
  .subscribe-form-wrapper {
    ${CustomContainer};
    ${CustomSpacing};

    padding: 5rem 1.5rem 10rem 1.5rem;

    .title {
      text-align: center;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.blackColor};

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        font-size: 3rem;
      }
    }

    .subscribe-form {
      ${Flexbox({ justify: "center" })};

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        flex-direction: column;
      }

      margin-top: 5rem;

      .form-input {
        ${Flexbox({ justify: "flex-start" })};

        border: 0.1rem solid ${({ theme }) => theme.colors.primaryColor};
        padding: 0.8rem;
        border-radius: 1rem;
        margin-right: 1rem;
        max-width: 60rem;
        width: 100%;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          margin-right: 0;
        }

        .icon {
          ${Flexbox({ justify: "center" })};

          > svg {
            width: 2rem;
            fill: ${({ theme }) => theme.colors.primaryColor};
          }
        }

        input {
          flex: 1;
          padding: 1rem;
          border: none;
          background: none;
          outline: none;
        }
      }

      button {
        background: ${({ theme }) => theme.colors.darkGreenColor};
        color: ${({ theme }) => theme.colors.whiteColor};

        border: none;
        padding: 1.6rem 5rem;
        border-radius: 0.5rem;

        cursor: pointer;
        transition: 0.3s all linear;

        &:hover {
          background: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.whiteColor};
        }

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          width: 90%;
          margin-top: 2rem;
        }
      }
    }
  }
`;

export const MainFooterstyle = styled.article`
  padding: 5rem;
  background: ${({ theme }) => theme.colors.footerColor};
  color: ${({ theme }) => theme.colors.whiteColor};

  .footer-container {
    ${GirdBox({ columns: "repeat(3, 1fr)" })};
    ${CustomContainer};
    ${CustomSpacing}

    justify-items: center;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.5);
    padding-bottom: 5rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      grid-template-columns: 1fr;
      justify-items: flex-start;
    }

    .footer-details {
      img {
        width: 12rem;
        height: 4rem;
      }
    }

    .footer-menus {
      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        margin: 3rem 0;
      }

      .heading {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      ul {
        padding-left: 2rem;

        li {
          a {
            display: block;
            padding: 0.5rem 0;

            font-size: 1.6rem;
            text-decoration: underline;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .footer-contact-links {
      justify-self: flex-end;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        justify-self: flex-start;
      }

      .heading {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .link {
        ${Flexbox({ justify: "flex-start" })};

        margin-bottom: 2rem;

        .icon {
          ${Flexbox({ justify: "center" })};

          font-size: 2rem;
          margin-right: 1rem;
        }
      }
    }
  }

  .footer-bottom {
    ${Flexbox};
    ${CustomContainer};
    ${CustomSpacing};

    padding-top: 4rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .copyright-text {
      span {
        font-weight: 600;
      }
    }

    .social-links {
      ${Flexbox({ justify: "center" })};

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        margin-top: 3rem;
      }

      a {
        margin-left: 2rem;

        > svg {
          font-size: 3rem;
        }
      }
    }
  }
`;
