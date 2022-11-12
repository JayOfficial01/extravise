import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html {
    font-size: 62.5%;

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

    body {
      padding: 0;
      margin: 0;
      font-family: 'Poppins', sans-serif;

      a {
        color: unset;
        text-decoration: none;
      }

      h1 {
        font-size: 7.2rem
      }

      h2 {
        font-size: 4.4rem
      }

      h3 {
        font-size: 2.4rem
      }

      p {
        font-size: 1.6rem
      }

    }
  }





`;
