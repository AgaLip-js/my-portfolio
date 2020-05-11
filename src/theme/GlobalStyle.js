import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


}
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*:focus {
  outline: none;
}
body{
box-sizing: border-box;
  background: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  font-weight: 400;
  scroll-behavior: smooth;
}
#root{
  background-color: white;
  justify-content: space-between;
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex: 1;
}

`;

export default GlobalStyle;
