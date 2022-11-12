import styled from "styled-components";
import { CustomContainer, CustomSpacing, GirdBox } from "./constant.style";

export const HomeStyle = styled.main`
  .services-wrapper {
    ${GirdBox({ columns: "repeat(3,1fr)", gap: "5rem" })};

    padding: 5rem 0;
    justify-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      ${GirdBox({ columns: "1fr" })};
    }
  }
`;

export const ClientsStyle = styled.section`
  ${CustomContainer};
  ${CustomSpacing}

  margin: 5rem auto;

  .heading {
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-align: center;
    font-weight: 500;
  }

  .logos-wrapper {
    ${GirdBox({ columns: "repeat(4, 1fr)" })};
    justify-items: center;
    margin-top: 5rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      ${GirdBox({ columns: "repeat(2, 1fr)", gap: "5rem 2rem" })};
    }

    img {
      max-width: 100%;
    }
  }
`;
