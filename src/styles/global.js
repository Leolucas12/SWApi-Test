import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #2b2d42;
    color: #edf2f4;
  }
  
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #edf2f4;
    font: 800 16px 'Roboto', sans-serif;
  }
`;