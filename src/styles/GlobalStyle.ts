import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --color-black: #000000;
        --color-white: #ffffff;
        --color-gray-100: #23252b;
        --color-gray-200: #495057;

    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
	    line-height: 1;
        font-family: 'Poppins', sans-serif;
        background-color: black;
        min-height: 100vh;
    }

`;
