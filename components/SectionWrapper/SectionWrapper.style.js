import styled from "styled-components";
import { CustomContainer, Flexbox } from "../../styles/constant.style";

export const SectionWrapperStyle = styled.article`
  background: ${(props) =>
    props.bg ? ({ theme }) => theme.colors.lightGreenColor : "unset"};

  margin: 3rem 0;

  .section-container {
    ${CustomContainer};

    padding: 5rem 1.5rem;

    .section-header {
      ${Flexbox({ direction: "column", justify: "center" })};

      width: 100%;
      margin: ${(props) => (props.centerAlign ? "0 auto;" : "unset")};

      .heading {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: 1.2rem;
      }

      .title {
        color: ${({ theme }) => theme.colors.blackColor};
        font-size: 4rem;
        padding: 1rem 0;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          font-size: 3rem;
        }
      }
    }

    .description {
      text-align: center;
      max-width: 60rem;
    }
  }
`;
