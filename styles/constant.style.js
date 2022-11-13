import Link from "next/link";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Flexbox = ({ justify, align, direction }) => css`
  display: flex;
  align-items: ${align || "center"};
  justify-content: ${justify || "space-between"};
  flex-direction: ${direction};
`;

export const GirdBox = ({ columns, gap, align }) => css`
  display: grid;
  grid-template-columns: ${columns || "1fr 1fr"};
  grid-gap: ${gap || "1rem"};
  align-items: ${align || "flex-start"};
`;

export const Positioning = ({
  position,
  top,
  right,
  bottom,
  left,
  transform,
}) => css`
  position: ${position || "relative"};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
  transform: ${transform};
`;

export const CustomContainer = css`
  max-width: 114rem;
  margin: 0 auto;
`;

export const CustomSpacing = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const PrimaryButton = styled(Link)`
  ${Flexbox({ justify: "center" })};

  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 0px 9px 16px rgba(91, 91, 91, 0.16);

  padding: 1.3rem 2rem;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.3rem;

  cursor: pointer;

  &:hover {
    span {
      margin-left: 2rem;
    }
  }

  span {
    ${Flexbox({ justify: "center" })};

    margin-left: 1rem;
    transition: 0.3s all linear;
  }
`;
