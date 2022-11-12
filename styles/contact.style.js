import styled from "styled-components";
import {
  CustomContainer,
  Flexbox,
  GirdBox,
  Positioning,
} from "./constant.style";

export const ContactStyle = styled.section`
  ${CustomContainer};

  padding: 15rem 1.5rem 5rem 1.5rem;

  .contact-container {
    ${GirdBox};

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      ${GirdBox({ columns: "1fr" })};
    }

    .details {
      color: ${({ theme }) => theme.colors.blackColor};

      .description {
        padding: 1rem 0;
      }

      .contact-list {
        list-style: none;

        li {
          ${Flexbox({ justify: "flex-start" })};

          padding: 1rem 0;

          span {
            ${Flexbox({ justify: "center" })};

            background: ${({ theme }) => theme.colors.lightGreenColor};
            color: ${({ theme }) => theme.colors.primaryColor};
            font-size: 1.5rem;
            margin-right: 1rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
          }
        }
      }

      .heading {
        margin: 1.5rem 0;
      }

      .timing {
        line-height: 3rem;
      }
    }

    .contact-form {
      background: rgba(255, 255, 255, 0.3);
      border: 0.05rem solid rgba(145, 145, 145, 0.17);
      box-shadow: 0 1.1rem 2.2rem rgba(62, 56, 56, 0.05);
      border-radius: 0.8rem;

      .form-input {
        background: rgba(248, 248, 248, 0.9);
      }
    }
  }

  .map-wrapper {
    ${Positioning};

    margin-top: 10rem;

    span {
      ${Positioning({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      })};

      font-size: 5rem;
      color: ${({ theme }) => theme.colors.primaryColor};
      z-index: 3;
    }

    img {
      max-width: 100%;
      height: auto;
      z-index: 1;
      filter: grayscale(2);
    }
  }
`;
