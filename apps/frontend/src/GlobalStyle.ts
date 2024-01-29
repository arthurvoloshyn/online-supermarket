import { createGlobalStyle } from "styled-components";
import "./GlobalStyle.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
  }
  #root {
    margin: 0 auto;
  }
`;
