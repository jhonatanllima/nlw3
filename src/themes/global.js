import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  main {
    width: 100%;
    height: 100%;
  }

  body {
    background: #ebf2f5;
    color: ${colors.white};
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button, a {
    cursor: pointer;
    text-decoration:none;
  }
`;
