import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background: #f5f5f5;
  height: 100vh;
}
  * {
    margin: 0;
    padding:0;
    font-family: 'Inter', sans-serif;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color:white;
  }
`;
