import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  	padding: 0;
  	margin: 0;
  	box-sizing: border-box;
  }
  
  a {
  	text-decoration: none;
  	color: inherit;
  }
  
  ol,
  ul {
  	list-style: none;
  }
  
  img {
  	display: block;
  	max-width: 100%;
  }
  
  html,
  body {
  	min-height: 100vh;
  	scroll-behavior: smooth;
    font-size: 16px;
  }
`
