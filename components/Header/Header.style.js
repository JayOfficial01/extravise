import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  Flexbox,
  GirdBox,
} from "../../styles/constant.style";

export const HeaderStyle = styled.header`
  background: url("./images/banner-bg.png") no-repeat;
  background-position: 100% -5rem;
  background-size: 53% 110%;

  padding-top: 5rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
    background-size: contain;
  }

  .header-container {
    ${GirdBox};
    ${CustomContainer};
    ${CustomSpacing};

    margin-top: 10rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
      ${GirdBox({ columns: "1fr" })};
    }

    .header-details {
      .title {
        color: ${({ theme }) => theme.colors.blackColor};
        line-height: 9rem;
        font-weight: 700;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          font-size: 4rem;
        }

        span {
          color: ${({ theme }) => theme.colors.primaryColor};
        }
      }

      .description {
        padding: 1rem 0;
        color: ${({ theme }) => theme.colors.secondaryColor};
      }

      .button-wrapper {
        ${Flexbox({ justify: "flex-start" })};

        margin-top: 3rem;

        .secondary-button {
          ${Flexbox({ justify: "center" })};

          padding: 1.1rem 2rem;
          border-radius: 0.8rem;
          margin-left: 3rem;
          font-weight: 600;
          font-size: 1.3rem;
          background: none;
          border: 0.15rem solid ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.primaryColor};

          cursor: pointer;
        }
      }
    }

    .header-image {
      ${Flexbox({ justify: "center", align: "flex-start" })}

      @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
        display: none;
      }

      img {
        width: 45rem;
        height: auto;
      }
    }
  }
`;
