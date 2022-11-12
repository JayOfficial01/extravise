import styled from "styled-components";
import { Positioning } from "../../styles/constant.style";

export const TimeLineStyle = styled.section`
  ${Positioning};

  display: flow-root;

  margin: 5rem 0;
  z-index: 1;

  &:after {
    ${Positioning({
      position: "absolute",
      left: "50%",
      top: "0",
      transform: "translateX(-50%)",
    })};

    content: "";
    border: 0.1rem dashed ${({ theme }) => theme.colors.darkGreenColor};
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
      display: none;
    }
  }
`;
