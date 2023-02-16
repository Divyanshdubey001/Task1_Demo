import {createGlobalStyle} from "styled-components";

const GlobalState = createGlobalStyle`


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

html{
  font-size: 62.5%;
}

body{
  background-color: #F5F5DC;
}

h1{
  font-size:2.6rem;
}
p{
  font-size: 1.6rem;
}


`;

export default GlobalState;