import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        /* a cada 1rem será considerado 10px */
        font-size: 62.5%;
    }

    html, body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    @font-face {
        font-family: 'Pokemon';
        src: url('/assets/fonts/Pokemon_Solid.ttf') format('truetype');
        /* src: url('/assets/fonts/Pokemon_Hollow.ttf') format('truetype'); */
        font-weight: normal;
        font-style: normal;
    }

`
