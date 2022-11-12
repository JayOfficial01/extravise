import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  GirdBox,
  Positioning,
} from "../../styles/constant.style";

export const ContactSectionStyle = styled.article`
  ${Positioning};

  background: url("./images/bg/contact-bg.png") no-repeat;
  background-size: cover;
  background-position: center;

  padding: 5rem 0;
  margin: 3rem 0;

  &:after {
    ${Positioning({ position: "absolute", top: "0", left: "0" })};

    content: "";

    width: 100%;
    height: 100%;

    background: rgba(247, 255, 243, 0.5);
    z-index: 1;
  }

  .contact-container {
    ${Positioning};
    ${CustomContainer};
    ${CustomSpacing};

    z-index: 2;

    .contact-wrapper {
      ${GirdBox({ align: "center" })};

      margin-top: 3rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        grid-template-columns: 1fr;
        place-items: center;
      }

      .contact-image-wrapper {
        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          display: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
`;
