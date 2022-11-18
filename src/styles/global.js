import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #ffffff;
    --background: #f0f2f5;
    --blue: #2F52E0;
    --blue-light: #4F77A8;
    --green:#6F9B6F;
    --lime:#BCED09;
    --yellow:#F9CB40;
    --orange: #fc9e4e;
    --red: #e63946;
    --gray:#9aaaac;
    --greyBlack: #1c2021;
    --black: #000000;
}


* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
 }

 //font-size: 16px (Desktop)
 html{
     @media (max-width: 1080px){
         font-size: 93.75% //15px
     }
body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}}
 button{
     cursor: pointer;
    }
    
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }
    `;
