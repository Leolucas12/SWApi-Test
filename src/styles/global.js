import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: #202020;
    color: #d6d6d6;
  }
  
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #ffee32;
    font: 800 16px 'Roboto', sans-serif;
  }
`;