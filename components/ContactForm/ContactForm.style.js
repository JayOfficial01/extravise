import styled from "styled-components";
import { Flexbox, GirdBox } from "../../styles/constant.style";

export const ContactFormStyle = styled.form`
  background: ${({ theme }) => theme.gradients.formGradient};
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
    padding: 2rem;
  }

  .form-input-fields {
    ${GirdBox};

    @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
      grid-template-columns: 1fr;
    }

    .form-input {
      ${Flexbox({ justify: "flex-start" })};

      background: ${({ theme }) => theme.colors.whiteColor};
      padding: 1rem;
      border-radius: 1rem;

      .icon {
        ${Flexbox({ justify: "center" })};
        margin-right: 1rem;

        > svg {
          width: 1.5rem;
          fill: ${({ theme }) => theme.colors.primaryColor};
        }
      }

      input {
        flex: 1;
        border: none;
        padding: 1rem;
        background: none;
        outline: none;
      }

      &:last-child {
        grid-column: 1/-1;

        textarea {
          width: 100%;
          padding: 1rem;

          outline: none;
          border: none;
          background: none;
        }
      }
    }
  }

  button {
    display: block;

    background: ${({ theme }) => theme.colors.darkGreenColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: 0px 9px 16px rgba(91, 91, 91, 0.16);

    padding: 1.5rem 5rem;
    max-width: 20rem;
    width: 100%;
    margin: 3rem auto;
    margin-bottom: 0;
    border-radius: 0.8rem;
    border: none;

    cursor: pointer;
    transition: 0.3s all linear;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;
