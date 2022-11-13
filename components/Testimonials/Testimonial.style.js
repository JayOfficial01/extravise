import styled from "styled-components";
import {
  CustomContainer,
  Flexbox,
  GirdBox,
  Positioning,
} from "../../styles/constant.style";

export const TestimonialStyle = styled.article`
  ${CustomContainer};

  padding: 5rem 1.5rem;

  .heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.4rem;
  }

  .title {
    color: ${({ theme }) => theme.colors.blackColor};
  }

  .testimonial-details {
    margin-top: 3rem;
    width: 100%;
    display: flex;

    .testimonial-slider {
      width: 60%;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        width: 100%;
      }

      .testimonials {
        border: 0.1rem solid ${({ theme }) => theme.colors.silverColor};
        border-radius: 1rem;
        padding: 3rem;

        z-index: 4;

        .slick-slider {
          .slider {
            padding: 2rem;
            height: inherit;

            .client-saying {
              ${Positioning};

              padding: 3rem;
              font-size: 2.2rem;

              @media (max-width: (${({ theme }) =>
                  theme.breakPoints.smallDevices})) {
                font-size: 2rem;
              }

              span {
                ${Positioning({ position: "absolute" })};

                color: ${({ theme }) => theme.colors.garyColor};
                font-size: 10rem;

                &.left {
                  top: -4rem;
                  left: 0;
                }

                &.right {
                  bottom: -4rem;
                  right: 0;
                }
              }
            }

            .published-by {
              ${Flexbox({ justify: "flex-start" })};

              margin-top: 4rem;

              .logo-wrapper {
                display: block;
                margin-right: 1.5rem;

                img {
                  max-width: 100%;
                  height: auto;
                }
              }

              .publisher-details {
                margin-left: 1.5rem;

                .name {
                  font-weight: 400;
                  font-size: 1.8rem;

                  @media (max-width: (${({ theme }) =>
                      theme.breakPoints.smallDevices})) {
                    font-size: 1.5rem;
                  }
                }

                .designation {
                  color: ${({ theme }) => theme.colors.secondaryColor};

                  @media (max-width: (${({ theme }) =>
                      theme.breakPoints.smallDevices})) {
                    font-size: 1rem;
                  }
                }
              }
            }
          }
        }
      }
    }

    .testimonial-image {
      display: block;
      margin-left: 5rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        display: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

export const SliderNextButtonStyle = styled.button`
  ${Positioning({ position: "absolute", right: "5rem", bottom: "2rem" })};

  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.garyColor};
  color: ${({ theme }) => theme.colors.garyColor};
  font-size: 1.8rem;
  background: none;

  border-radius: 0.5rem;

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
    bottom: -2rem;
  }
`;

export const SliderPrevButtonStyle = styled.button`
  ${Positioning({ position: "absolute", right: "10rem", bottom: "2rem" })};

  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.garyColor};
  color: ${({ theme }) => theme.colors.garyColor};
  font-size: 1.8rem;
  background: none;

  border-radius: 0.5rem;

  cursor: pointer;

  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
    bottom: -2rem;
  }
`;
